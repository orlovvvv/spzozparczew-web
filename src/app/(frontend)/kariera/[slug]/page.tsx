import type { Metadata } from 'next'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  CalendarBlank,
  Clock,
  Phone,
  Envelope,
  ShareNetwork,
  FileArrowDown,
  CheckCircle,
} from '@phosphor-icons/react/dist/ssr'

import RichText from '@/components/RichText'
import { Badge } from '@/components/ui/badge'
import { formatDate, getDaysUntil, isExpired } from '@/utilities/formatDate'
import { getFileIcon, formatFileSize } from '@/utilities/getFileIcon'
import { LivePreviewListener } from '@/components/LivePreviewListener'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const jobs = await payload.find({
    collection: 'jobs',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  return jobs.docs.map(({ slug }) => ({ slug }))
}

type Args = {
  params: Promise<{
    slug: string
  }>
}

const employmentTypeLabels: Record<string, string> = {
  'full-time': 'Pełny etat',
  'part-time': 'Część etatu',
  'contract': 'Umowa zlecenie',
  'project': 'Umowa o dzieło',
  'internship': 'Staż/Praktyka',
}

const statusLabels: Record<string, string> = {
  'active': 'Rekrutacja trwa',
  'closed': 'Rekrutacja zakończona',
  'on-hold': 'Rekrutacja wstrzymana',
}

const statusVariants: Record<string, 'success' | 'error' | 'warning'> = {
  'active': 'success',
  'closed': 'error',
  'on-hold': 'warning',
}

export default async function JobPage({ params }: Args) {
  const { slug } = await params
  const { isEnabled: draft } = await draftMode()

  const job = await queryJobBySlug({ slug })

  if (!job) {
    return notFound()
  }

  const {
    title,
    position,
    department,
    location,
    employmentType,
    salary,
    deadline,
    status,
    description,
    requirements,
    responsibilities,
    benefits,
    applicationInstructions,
    requiredDocuments,
    contactPerson,
    contactPhone,
    contactEmail,
    attachments,
    publishedAt,
  } = job

  const daysLeft = getDaysUntil(deadline)
  const expired = isExpired(deadline)

  return (
    <article className="py-8">
      <div className="container">
        {draft && <LivePreviewListener />}

        {/* Back Link */}
        <Link
          href="/kariera"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} weight="bold" />
          <span>Powrót do ofert pracy</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-8">
              <Badge variant={statusVariants[status || 'active']} className="mb-4">
                {statusLabels[status || 'active']}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
                {position || title}
              </h1>
              {department && (
                <p className="text-lg text-muted-foreground">{department}</p>
              )}
            </div>

            {/* Key Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Lokalizacja</p>
                <p className="text-sm font-medium text-foreground flex items-center gap-1.5">
                  <MapPin size={14} weight="bold" className="text-primary" />
                  {location || 'Parczew'}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Typ umowy</p>
                <p className="text-sm font-medium text-foreground flex items-center gap-1.5">
                  <Briefcase size={14} weight="bold" className="text-primary" />
                  {employmentType ? employmentTypeLabels[employmentType] : 'Pełny etat'}
                </p>
              </div>
              {salary && (
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Wynagrodzenie</p>
                  <p className="text-sm font-medium text-foreground">{salary}</p>
                </div>
              )}
              {publishedAt && (
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Data publikacji</p>
                  <p className="text-sm font-medium text-foreground flex items-center gap-1.5">
                    <CalendarBlank size={14} weight="bold" className="text-primary" />
                    {formatDate(publishedAt, 'short')}
                  </p>
                </div>
              )}
            </div>

            {/* Deadline Warning */}
            {deadline && status === 'active' && (
              <div
                className={`flex items-center gap-3 p-4 rounded-xl mb-8 ${
                  expired
                    ? 'bg-destructive/10 text-destructive'
                    : daysLeft !== null && daysLeft <= 7
                      ? 'bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800'
                      : 'bg-primary/5 border border-primary/10'
                }`}
              >
                <Clock
                  size={20}
                  weight="bold"
                  className={expired ? 'text-destructive' : daysLeft !== null && daysLeft <= 7 ? 'text-amber-600' : 'text-primary'}
                />
                <div>
                  <p className={`text-sm font-medium ${expired ? 'text-destructive' : daysLeft !== null && daysLeft <= 7 ? 'text-amber-700 dark:text-amber-400' : 'text-foreground'}`}>
                    {expired
                      ? 'Termin składania dokumentów minął'
                      : daysLeft === 0
                        ? 'Dzisiaj mija termin składania dokumentów!'
                        : daysLeft === 1
                          ? 'Jutro mija termin składania dokumentów'
                          : `Termin składania dokumentów: ${formatDate(deadline, 'long')}`}
                  </p>
                  {!expired && daysLeft !== null && daysLeft <= 14 && (
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {daysLeft === 0 ? 'Ostatnia szansa!' : `Pozostało ${daysLeft} dni`}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Description */}
            {description && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">Opis stanowiska</h2>
                <div className="prose prose-slate dark:prose-invert max-w-none prose-sm">
                  <RichText data={description} enableGutter={false} />
                </div>
              </section>
            )}

            {/* Requirements */}
            {requirements && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">Wymagania</h2>
                <div className="prose prose-slate dark:prose-invert max-w-none prose-sm">
                  <RichText data={requirements} enableGutter={false} />
                </div>
              </section>
            )}

            {/* Responsibilities */}
            {responsibilities && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">Zakres obowiązków</h2>
                <div className="prose prose-slate dark:prose-invert max-w-none prose-sm">
                  <RichText data={responsibilities} enableGutter={false} />
                </div>
              </section>
            )}

            {/* Benefits */}
            {benefits && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">Oferujemy</h2>
                <div className="prose prose-slate dark:prose-invert max-w-none prose-sm">
                  <RichText data={benefits} enableGutter={false} />
                </div>
              </section>
            )}

            {/* Required Documents */}
            {requiredDocuments && requiredDocuments.length > 0 && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">Wymagane dokumenty</h2>
                <ul className="space-y-2">
                  {requiredDocuments.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={16} weight="bold" className="text-primary mt-0.5 shrink-0" />
                      <span>{doc.document}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Application Instructions */}
            {applicationInstructions && (
              <section className="mb-8 p-6 bg-primary/5 rounded-xl">
                <h2 className="text-xl font-semibold text-foreground mb-4">Jak aplikować?</h2>
                <div className="prose prose-slate dark:prose-invert max-w-none prose-sm">
                  <RichText data={applicationInstructions} enableGutter={false} />
                </div>
              </section>
            )}

            {/* Attachments */}
            {attachments && attachments.length > 0 && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">Załączniki</h2>
                <div className="space-y-2">
                  {attachments.map((attachment) => {
                    if (typeof attachment !== 'object' || !attachment.url) return null
                    const FileIcon = getFileIcon(attachment.mimeType || attachment.filename || '')
                    return (
                      <a
                        key={attachment.id}
                        href={attachment.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary/30 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                      >
                        <FileIcon size={24} weight="duotone" className="text-primary shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">
                            {attachment.filename || 'Pobierz plik'}
                          </p>
                          {attachment.filesize && (
                            <p className="text-xs text-muted-foreground">
                              {formatFileSize(attachment.filesize)}
                            </p>
                          )}
                        </div>
                        <FileArrowDown size={20} weight="bold" className="text-primary shrink-0" />
                      </a>
                    )
                  })}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Contact Card */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                <h3 className="text-sm font-semibold text-foreground mb-4">
                  Kontakt w sprawie oferty
                </h3>
                <div className="space-y-3">
                  {contactPerson && (
                    <p className="text-sm text-foreground font-medium">{contactPerson}</p>
                  )}
                  {contactPhone && (
                    <a
                      href={`tel:${contactPhone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone size={16} weight="bold" className="text-primary" />
                      {contactPhone}
                    </a>
                  )}
                  {contactEmail && (
                    <a
                      href={`mailto:${contactEmail}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Envelope size={16} weight="bold" className="text-primary" />
                      {contactEmail}
                    </a>
                  )}
                </div>
              </div>

              {/* Share */}
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                  <ShareNetwork size={16} weight="bold" />
                  Udostępnij ofertę
                </div>
                <p className="text-xs text-muted-foreground">
                  Podziel się tą ofertą ze znajomymi, którzy mogą być zainteresowani.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  )
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params
  const job = await queryJobBySlug({ slug })

  if (!job) {
    return {
      title: 'Oferta nie znaleziona | SPZOZ Parczew',
    }
  }

  return {
    title: `${job.position || job.title} | Kariera | SPZOZ Parczew`,
    description: job.meta?.description || `Oferta pracy na stanowisko ${job.position || job.title} w SPZOZ Parczew.`,
  }
}

const queryJobBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'jobs',
    draft,
    limit: 1,
    depth: 2,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
