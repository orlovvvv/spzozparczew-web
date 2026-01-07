import type { Metadata } from 'next'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  Phone,
  EnvelopeSimple,
  MapPin,
  Clock,
  Warning,
} from '@phosphor-icons/react/dist/ssr'

import RichText from '@/components/RichText'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { getPhosphorIcon } from '@/utilities/getPhosphorIcon'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const departments = await payload.find({
    collection: 'departments',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  return departments.docs.map(({ slug }) => ({ slug }))
}

type Args = {
  params: Promise<{
    slug: string
  }>
}

export default async function DepartmentPage({ params }: Args) {
  const { slug } = await params
  const { isEnabled: draft } = await draftMode()

  const department = await queryDepartmentBySlug({ slug })

  if (!department) {
    return notFound()
  }

  const {
    name,
    icon,
    shortDescription,
    description,
    isEmergency,
    phone,
    email,
    location,
    workingHours,
  } = department

  return (
    <article className="py-8">
      <div className="container">
        {draft && <LivePreviewListener />}

        {/* Back Link */}
        <Link
          href="/dla-pacjenta"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} weight="bold" />
          <span>Powrót do listy oddziałów</span>
        </Link>

        {/* Header */}
        <div className={`rounded-2xl p-8 mb-8 ${isEmergency ? 'bg-destructive/5 border border-destructive/20' : 'bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800'}`}>
          <div className="flex items-start gap-6">
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center shrink-0 ${isEmergency ? 'bg-destructive/10 text-destructive' : 'bg-white dark:bg-slate-800 text-primary border border-slate-200 dark:border-slate-700'}`}>
              {getPhosphorIcon(icon, { size: 32, weight: 'bold' })}
            </div>
            <div>
              <h1 className={`text-3xl md:text-4xl font-semibold tracking-tight mb-2 ${isEmergency ? 'text-destructive' : 'text-foreground'}`}>
                {name}
              </h1>
              {isEmergency && (
                <div className="flex items-center gap-2 text-destructive mb-3">
                  <Warning size={18} weight="bold" />
                  <span className="text-sm font-medium">Szpitalny Oddział Ratunkowy (SOR)</span>
                </div>
              )}
              {shortDescription && (
                <p className="text-lg text-muted-foreground">{shortDescription}</p>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            {description && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">O oddziale</h2>
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <RichText data={description} enableGutter={false} />
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Contact Card */}
              <div className={`rounded-xl p-6 ${isEmergency ? 'bg-destructive/5 border border-destructive/20' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800'}`}>
                <h3 className="text-sm font-semibold text-foreground mb-4">Kontakt</h3>
                <div className="space-y-4">
                  {phone && (
                    <a
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className={`flex items-center gap-3 text-sm hover:opacity-80 transition-opacity ${isEmergency ? 'text-destructive font-semibold' : 'text-muted-foreground hover:text-primary'}`}
                    >
                      <Phone size={18} weight="bold" className={isEmergency ? 'text-destructive' : 'text-primary'} />
                      <div>
                        <p className="text-xs text-muted-foreground">Telefon</p>
                        <p className={isEmergency ? 'text-destructive' : 'text-foreground'}>{phone}</p>
                      </div>
                    </a>
                  )}
                  {email && (
                    <a
                      href={`mailto:${email}`}
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <EnvelopeSimple size={18} weight="bold" className="text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Email</p>
                        <p className="text-foreground">{email}</p>
                      </div>
                    </a>
                  )}
                  {location && (
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin size={18} weight="bold" className="text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Lokalizacja</p>
                        <p className="text-foreground">{location}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Working Hours */}
              {workingHours && (
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                    <Clock size={16} weight="bold" className="text-primary" />
                    Godziny pracy
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{workingHours}</p>
                </div>
              )}

              {/* Emergency Notice */}
              {isEmergency && (
                <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6">
                  <div className="flex items-center gap-2 text-destructive font-semibold mb-2">
                    <Warning size={18} weight="bold" />
                    Nagłe przypadki
                  </div>
                  <p className="text-sm text-muted-foreground">
                    W sytuacji zagrożenia życia lub zdrowia, dzwoń na numer alarmowy 112 lub przyjedź bezpośrednio do SOR.
                  </p>
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
  const department = await queryDepartmentBySlug({ slug })

  if (!department) {
    return {
      title: 'Oddział nie znaleziony | SPZOZ Parczew',
    }
  }

  return {
    title: `${department.name} | Oddziały | SPZOZ Parczew`,
    description: department.meta?.description || department.shortDescription || `Oddział ${department.name} w SPZOZ Parczew.`,
  }
}

const queryDepartmentBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'departments',
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
