import type { Metadata } from 'next'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  CalendarBlank,
  Clock,
  Phone,
  Envelope,
  FileArrowDown,
  FlagBanner,
  Tag,
  Buildings,
  Timer,
} from '@phosphor-icons/react/dist/ssr'

import RichText from '@/components/RichText'
import { Badge } from '@/components/ui/badge'
import { formatDate, getDaysUntil, isExpired } from '@/utilities/formatDate'
import { getFileIcon, formatFileSize, getFileExtension } from '@/utilities/getFileIcon'
import { LivePreviewListener } from '@/components/LivePreviewListener'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const procurements = await payload.find({
    collection: 'publicProcurements',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  return procurements.docs.map(({ slug }) => ({ slug }))
}

type Args = {
  params: Promise<{
    slug: string
  }>
}

const statusLabels: Record<string, string> = {
  'active': 'Aktywne',
  'closed': 'Zakończone',
  'cancelled': 'Unieważnione',
}

type BadgeVariant = 'success' | 'error' | 'warning' | 'secondary'

const statusVariants: Record<string, BadgeVariant> = {
  'active': 'success',
  'closed': 'secondary',
  'cancelled': 'error',
}

const procedureTypeLabels: Record<string, string> = {
  'basic': 'Tryb podstawowy',
  'open': 'Przetarg nieograniczony',
  'restricted': 'Przetarg ograniczony',
  'single-source': 'Zamówienie z wolnej ręki',
  'rfq': 'Zapytanie ofertowe',
}

const attachmentCategoryLabels: Record<string, string> = {
  'announcement': 'Ogłoszenie',
  'specification': 'SWZ',
  'attachments': 'Załączniki',
  'clarifications': 'Wyjaśnienia',
  'amendments': 'Zmiany',
  'results': 'Wyniki',
  'contract': 'Umowa',
  'other': 'Inne',
}

export default async function ProcurementPage({ params }: Args) {
  const { slug } = await params
  const { isEnabled: draft } = await draftMode()

  const procurement = await queryProcurementBySlug({ slug })

  if (!procurement) {
    return notFound()
  }

  const {
    title,
    procurementNumber,
    procedureType,
    procurementStatus,
    publishDate,
    deadlineDate,
    openingDate,
    estimatedValue,
    euProject,
    description,
    cpvCodes,
    attachments,
    contactPerson,
    contactPhone,
    contactEmail,
  } = procurement

  const daysLeft = getDaysUntil(deadlineDate)
  const expired = isExpired(deadlineDate)

  // Group attachments by category
  const groupedAttachments = attachments?.reduce(
    (acc, att) => {
      const category = att.category || 'other'
      if (!acc[category]) acc[category] = []
      acc[category].push(att)
      return acc
    },
    {} as Record<string, typeof attachments>,
  )

  return (
    <article className="py-8">
      <div className="container">
        {draft && <LivePreviewListener />}

        {/* Back Link */}
        <Link
          href="/przetargi"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} weight="bold" />
          <span>Powrót do zamówień publicznych</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-lg font-semibold text-primary">
                  {procurementNumber}
                </span>
                <Badge variant={statusVariants[procurementStatus || 'active']}>
                  {statusLabels[procurementStatus || 'active']}
                </Badge>
                {euProject && (
                  <div className="flex items-center gap-1.5 text-xs text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-full">
                    <FlagBanner size={12} weight="fill" />
                    <span>Projekt UE</span>
                  </div>
                )}
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-4">
                {title}
              </h1>
              <p className="text-muted-foreground">
                {procedureType ? procedureTypeLabels[procedureType] : 'Tryb podstawowy'}
              </p>
            </div>

            {/* Key Dates */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <CalendarBlank size={14} weight="bold" className="text-primary" />
                  Data publikacji
                </div>
                <p className="text-sm font-medium text-foreground">
                  {formatDate(publishDate, 'long')}
                </p>
              </div>

              {deadlineDate && (
                <div
                  className={`rounded-xl p-4 ${
                    procurementStatus === 'active' && !expired && daysLeft !== null && daysLeft <= 7
                      ? 'bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800'
                      : 'bg-slate-50 dark:bg-slate-800/50'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Clock
                      size={14}
                      weight="bold"
                      className={
                        procurementStatus === 'active' && !expired && daysLeft !== null && daysLeft <= 7
                          ? 'text-amber-600'
                          : 'text-primary'
                      }
                    />
                    Termin składania ofert
                  </div>
                  <p
                    className={`text-sm font-medium ${
                      procurementStatus === 'active' && !expired && daysLeft !== null && daysLeft <= 7
                        ? 'text-amber-700 dark:text-amber-400'
                        : 'text-foreground'
                    }`}
                  >
                    {formatDate(deadlineDate, 'dateTime')}
                  </p>
                  {procurementStatus === 'active' && !expired && daysLeft !== null && daysLeft <= 14 && (
                    <p className="text-xs text-amber-600 mt-1">
                      {daysLeft === 0 ? 'Ostatni dzień!' : `Pozostało ${daysLeft} dni`}
                    </p>
                  )}
                </div>
              )}

              {openingDate && (
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Timer size={14} weight="bold" className="text-primary" />
                    Otwarcie ofert
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    {formatDate(openingDate, 'dateTime')}
                  </p>
                </div>
              )}
            </div>

            {/* Estimated Value */}
            {estimatedValue && (
              <div className="mb-8 p-4 bg-primary/5 rounded-xl">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                  <Buildings size={14} weight="bold" className="text-primary" />
                  Szacunkowa wartość zamówienia
                </div>
                <p className="text-sm font-medium text-foreground">{estimatedValue}</p>
              </div>
            )}

            {/* Description */}
            {description && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Opis przedmiotu zamówienia
                </h2>
                <div className="prose prose-slate dark:prose-invert max-w-none prose-sm">
                  <RichText data={description} enableGutter={false} />
                </div>
              </section>
            )}

            {/* Attachments */}
            {groupedAttachments && Object.keys(groupedAttachments).length > 0 && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Dokumentacja przetargowa
                </h2>
                <div className="space-y-6">
                  {Object.entries(groupedAttachments).map(([category, files]) => (
                    <div key={category}>
                      <h3 className="text-sm font-medium text-muted-foreground mb-3">
                        {attachmentCategoryLabels[category] || category}
                      </h3>
                      <div className="space-y-2">
                        {files?.map((att) => {
                          const file = typeof att.file === 'object' ? att.file : null
                          if (!file?.url) return null
                          const FileIcon = getFileIcon(file.mimeType || file.filename || '')
                          return (
                            <a
                              key={att.id || file.id}
                              href={file.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary/30 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                            >
                              <FileIcon size={24} weight="duotone" className="text-primary shrink-0" />
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-foreground truncate">
                                  {att.name || file.filename || 'Pobierz plik'}
                                </p>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                  {file.filesize && <span>{formatFileSize(file.filesize)}</span>}
                                  {file.filename && (
                                    <span className="uppercase">{getFileExtension(file.filename)}</span>
                                  )}
                                </div>
                              </div>
                              <FileArrowDown size={20} weight="bold" className="text-primary shrink-0" />
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Countdown (for active procurements) */}
              {procurementStatus === 'active' && deadlineDate && !expired && (
                <div className="bg-primary text-primary-foreground rounded-xl p-6 text-center">
                  <p className="text-xs uppercase tracking-wider opacity-80 mb-2">
                    Do końca składania ofert
                  </p>
                  <p className="text-4xl font-bold mb-1">
                    {daysLeft !== null ? daysLeft : '?'}
                  </p>
                  <p className="text-sm opacity-80">
                    {daysLeft === 1 ? 'dzień' : 'dni'}
                  </p>
                </div>
              )}

              {/* Contact Card */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                <h3 className="text-sm font-semibold text-foreground mb-4">
                  Kontakt w sprawie zamówienia
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

              {/* CPV Codes */}
              {cpvCodes && cpvCodes.length > 0 && (
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6">
                  <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Tag size={16} weight="bold" className="text-primary" />
                    Kody CPV
                  </h3>
                  <div className="space-y-2">
                    {cpvCodes.map((cpv, idx) => (
                      <div key={idx} className="text-sm">
                        <span className="text-primary">{cpv.code}</span>
                        {cpv.description && (
                          <p className="text-xs text-muted-foreground mt-0.5">{cpv.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </article>
  )
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params
  const procurement = await queryProcurementBySlug({ slug })

  if (!procurement) {
    return {
      title: 'Zamówienie nie znalezione | SPZOZ Parczew',
    }
  }

  return {
    title: `${procurement.procurementNumber} - ${procurement.title} | SPZOZ Parczew`,
    description:
      procurement.meta?.description ||
      `Zamówienie publiczne ${procurement.procurementNumber}: ${procurement.title}`,
  }
}

const queryProcurementBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'publicProcurements',
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
