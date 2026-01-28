import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { Stethoscope, ArrowRight } from '@phosphor-icons/react/dist/ssr'

import { getPhosphorIcon } from '@/utilities/getPhosphorIcon'

export const metadata: Metadata = {
  title: 'Poradnie Specjalistyczne | SPZOZ Parczew',
  description:
    'Lista poradni specjalistycznych i jednostek diagnostycznych Samodzielnego Publicznego Zakładu Opieki Zdrowotnej w Parczewie.',
}

export const revalidate = 600

export default async function ClinicsPage() {
  const payload = await getPayload({ config: configPromise })

  const clinicsResult = await payload.find({
    collection: 'clinics',
    depth: 1,
    limit: 100,
    overrideAccess: false,
    sort: 'sortOrder',
    where: {
      _status: {
        equals: 'published',
      },
    },
  })

  const clinics = clinicsResult.docs

  return (
    <div className="py-8">
      {/* Page Header */}
      <section className="py-12 container">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl">
              <Stethoscope size={24} weight="duotone" />
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Poradnie Specjalistyczne
            </h1>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Oferujemy szeroki zakres ambulatoryjnej opieki specjalistycznej. Poniżej znajdziesz
            listę poradni oraz jednostek diagnostycznych wraz z informacjami kontaktowymi.
          </p>
        </div>
      </section>

      {/* Clinics Grid */}
      <section className="pb-16 container">
        {clinics.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinics.map((clinic) => (
              <Link
                key={clinic.id}
                href={`/poradnie/${clinic.slug}`}
                className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:border-blue-500/30 hover:shadow-lg transition-all duration-300 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-10 h-10 shrink-0 rounded-full border bg-blue-50 dark:bg-blue-900/30 border-blue-100 dark:border-blue-800 text-blue-600 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 group-hover:border-blue-200 transition-colors duration-300">
                      {getPhosphorIcon(clinic.icon, { size: 20, weight: 'duotone' })}
                    </div>
                    <h2 className="text-sm font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                      {clinic.name}
                    </h2>
                  </div>
                  <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out shrink-0 text-blue-600">
                    <ArrowRight size={18} weight="bold" />
                  </div>
                </div>
                {clinic.shortDescription && (
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {clinic.shortDescription}
                  </p>
                )}
                {clinic.phone && (
                  <p className="text-xs text-muted-foreground mt-auto pt-2 border-t border-slate-100 dark:border-slate-800">
                    Tel: {clinic.phone}
                  </p>
                )}
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
            <Stethoscope size={48} weight="duotone" className="mx-auto mb-4 opacity-50" />
            <p>Brak opublikowanych poradni.</p>
          </div>
        )}
      </section>
    </div>
  )
}
