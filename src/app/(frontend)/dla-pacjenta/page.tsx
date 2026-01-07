import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { Buildings, Stethoscope, ArrowRight } from '@phosphor-icons/react/dist/ssr'

import { getPhosphorIcon } from '@/utilities/getPhosphorIcon'
import { cn } from '@/utilities/ui'

export const metadata: Metadata = {
  title: 'Dla Pacjenta - Oddziały i Poradnie | SPZOZ Parczew',
  description:
    'Oddziały szpitalne i poradnie specjalistyczne Samodzielnego Publicznego Zakładu Opieki Zdrowotnej w Parczewie.',
}

export const revalidate = 600 // Revalidate every 10 minutes

export default async function ForPatientsPage() {
  const payload = await getPayload({ config: configPromise })

  const [departmentsResult, clinicsResult] = await Promise.all([
    payload.find({
      collection: 'departments',
      depth: 1,
      limit: 100,
      sort: 'sortOrder',
      where: {
        _status: {
          equals: 'published',
        },
      },
    }),
    payload.find({
      collection: 'clinics',
      depth: 1,
      limit: 100,
      sort: 'sortOrder',
      where: {
        _status: {
          equals: 'published',
        },
      },
    }),
  ])

  const departments = departmentsResult.docs
  const clinics = clinicsResult.docs

  return (
    <div className="py-8">
      {/* Page Header */}
      <section className="py-12 container">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4">
            Oddziały i Poradnie Specjalistyczne
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Świadczymy kompleksowe usługi medyczne w ramach lecznictwa szpitalnego oraz
            ambulatoryjnego. Poniżej znajdziesz listę naszych oddziałów oraz poradni.
          </p>
        </div>
      </section>

      {/* Hospital Departments */}
      <section className="pb-16 container" id="oddzialy">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-primary/10 text-primary rounded-lg">
            <Buildings size={20} weight="duotone" />
          </div>
          <h2 className="text-xl font-semibold text-foreground tracking-tight">
            Oddziały Szpitalne
          </h2>
        </div>

        {departments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <Link
                key={dept.id}
                href={`/oddzialy/${dept.slug}`}
                className={cn(
                  'group bg-white dark:bg-slate-900 border rounded-xl p-5 hover:shadow-lg transition-all duration-300 flex items-center justify-between gap-4 relative overflow-hidden',
                  dept.isEmergency
                    ? 'border-destructive/30 hover:border-destructive/50 ring-1 ring-destructive/10'
                    : 'border-slate-200 dark:border-slate-800 hover:border-primary/30',
                )}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div
                    className={cn(
                      'w-10 h-10 shrink-0 rounded-full border flex items-center justify-center transition-colors duration-300',
                      dept.isEmergency
                        ? 'bg-destructive/5 border-destructive/20 text-destructive group-hover:bg-destructive/10'
                        : 'bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-muted-foreground group-hover:bg-primary/5 group-hover:text-primary group-hover:border-primary/20',
                    )}
                  >
                    {getPhosphorIcon(dept.icon, { size: 20, weight: 'duotone' })}
                  </div>
                  <div className="min-w-0">
                    <h3
                      className={cn(
                        'text-sm font-semibold leading-tight transition-colors duration-300',
                        dept.isEmergency
                          ? 'text-foreground group-hover:text-destructive'
                          : 'text-foreground group-hover:text-primary',
                      )}
                    >
                      {dept.name}
                    </h3>
                    {dept.shortDescription && (
                      <p className="text-xs text-muted-foreground mt-0.5 truncate">
                        {dept.shortDescription}
                      </p>
                    )}
                  </div>
                </div>
                <div
                  className={cn(
                    'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out shrink-0',
                    dept.isEmergency ? 'text-destructive' : 'text-primary',
                  )}
                >
                  <ArrowRight size={18} weight="bold" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">Brak opublikowanych oddziałów.</p>
        )}
      </section>

      {/* Specialist Clinics */}
      <section
        className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800"
        id="poradnie"
      >
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg">
              <Stethoscope size={20} weight="duotone" />
            </div>
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              Poradnie i Jednostki Diagnostyczne
            </h2>
          </div>

          {clinics.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clinics.map((clinic) => (
                <Link
                  key={clinic.id}
                  href={`/poradnie/${clinic.slug}`}
                  className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:border-blue-500/30 hover:shadow-lg transition-all duration-300 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-10 h-10 shrink-0 rounded-full border bg-blue-50 dark:bg-blue-900/30 border-blue-100 dark:border-blue-800 text-blue-600 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 group-hover:border-blue-200 transition-colors duration-300">
                      {getPhosphorIcon(clinic.icon, { size: 20, weight: 'duotone' })}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                        {clinic.name}
                      </h4>
                      {clinic.shortDescription && (
                        <p className="text-xs text-muted-foreground mt-0.5 truncate">
                          {clinic.shortDescription}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out shrink-0 text-blue-600">
                    <ArrowRight size={18} weight="bold" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">Brak opublikowanych poradni.</p>
          )}
        </div>
      </section>
    </div>
  )
}
