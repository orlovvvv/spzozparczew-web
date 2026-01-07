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
  CalendarCheck,
} from '@phosphor-icons/react/dist/ssr'

import RichText from '@/components/RichText'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { getPhosphorIcon } from '@/utilities/getPhosphorIcon'
import { WeeklySchedule } from '@/components/WeeklySchedule'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const clinics = await payload.find({
    collection: 'clinics',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  return clinics.docs.map(({ slug }) => ({ slug }))
}

type Args = {
  params: Promise<{
    slug: string
  }>
}

export default async function ClinicPage({ params }: Args) {
  const { slug } = await params
  const { isEnabled: draft } = await draftMode()

  const clinic = await queryClinicBySlug({ slug })

  if (!clinic) {
    return notFound()
  }

  const {
    name,
    icon,
    shortDescription,
    description,
    phone,
    email,
    location,
    weeklySchedule,
  } = clinic

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
          <span>Powrót do listy poradni</span>
        </Link>

        {/* Header */}
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 mb-8">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center shrink-0">
              {getPhosphorIcon(icon, { size: 32, weight: 'bold' })}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-2">
                {name}
              </h1>
              {shortDescription && (
                <p className="text-lg text-muted-foreground">{shortDescription}</p>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            {description && (
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">O poradni</h2>
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <RichText data={description} enableGutter={false} />
                </div>
              </section>
            )}

            {/* Weekly Schedule */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <CalendarCheck size={24} weight="bold" className="text-primary" />
                <h2 className="text-xl font-semibold text-foreground">Grafik przyjęć</h2>
              </div>
              <WeeklySchedule schedule={weeklySchedule} />
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Contact Card */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                <h3 className="text-sm font-semibold text-foreground mb-4">Kontakt</h3>
                <div className="space-y-4">
                  {phone && (
                    <a
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone size={18} weight="bold" className="text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Telefon</p>
                        <p className="text-foreground font-medium">{phone}</p>
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

              {/* Registration Info */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl p-6">
                <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-semibold mb-2">
                  <Phone size={18} weight="bold" />
                  Rejestracja
                </div>
                <p className="text-sm text-muted-foreground">
                  Aby umówić się na wizytę, zadzwoń do rejestracji lub zgłoś się osobiście w godzinach pracy poradni.
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
  const clinic = await queryClinicBySlug({ slug })

  if (!clinic) {
    return {
      title: 'Poradnia nie znaleziona | SPZOZ Parczew',
    }
  }

  return {
    title: `${clinic.name} | Poradnie | SPZOZ Parczew`,
    description: clinic.meta?.description || clinic.shortDescription || `Poradnia ${clinic.name} w SPZOZ Parczew.`,
  }
}

const queryClinicBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'clinics',
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
