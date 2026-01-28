import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { Buildings, ArrowRight, Warning } from '@phosphor-icons/react/dist/ssr'

import { getPhosphorIcon } from '@/utilities/getPhosphorIcon'
import { cn } from '@/utilities/ui'

export const metadata: Metadata = {
  title: 'Oddziały Szpitalne | SPZOZ Parczew',
  description:
    'Lista oddziałów szpitalnych Samodzielnego Publicznego Zakładu Opieki Zdrowotnej w Parczewie. Oddział ratunkowy, chirurgia, interna i inne.',
}

export const revalidate = 600

export default async function DepartmentsPage() {
  const payload = await getPayload({ config: configPromise })

  const departmentsResult = await payload.find({
    collection: 'departments',
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

  const departments = departmentsResult.docs

  return (
    <div className="py-8">
      {/* Page Header */}
      <section className="py-12 container">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
              <Buildings size={24} weight="duotone" />
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Oddziały Szpitalne
            </h1>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nasz szpital oferuje kompleksową opiekę medyczną w ramach lecznictwa szpitalnego.
            Poniżej znajdziesz listę wszystkich oddziałów wraz z informacjami kontaktowymi.
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="pb-16 container">
        {departments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <Link
                key={dept.id}
                href={`/oddzialy/${dept.slug}`}
                className={cn(
                  'group bg-white dark:bg-slate-900 border rounded-xl p-5 hover:shadow-lg transition-all duration-300 flex flex-col gap-4 relative overflow-hidden',
                  dept.isEmergency
                    ? 'border-destructive/30 hover:border-destructive/50 ring-1 ring-destructive/10'
                    : 'border-slate-200 dark:border-slate-800 hover:border-primary/30',
                )}
              >
                <div className="flex items-center justify-between gap-4">
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
                      <h2
                        className={cn(
                          'text-sm font-semibold leading-tight transition-colors duration-300',
                          dept.isEmergency
                            ? 'text-foreground group-hover:text-destructive'
                            : 'text-foreground group-hover:text-primary',
                        )}
                      >
                        {dept.name}
                      </h2>
                      {dept.isEmergency && (
                        <div className="flex items-center gap-1 mt-0.5">
                          <Warning size={12} weight="bold" className="text-destructive" />
                          <span className="text-xs font-medium text-destructive">SOR</span>
                        </div>
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
                </div>
                {dept.shortDescription && (
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {dept.shortDescription}
                  </p>
                )}
                {dept.phone && (
                  <p className="text-xs text-muted-foreground mt-auto pt-2 border-t border-slate-100 dark:border-slate-800">
                    Tel: {dept.phone}
                  </p>
                )}
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
            <Buildings size={48} weight="duotone" className="mx-auto mb-4 opacity-50" />
            <p>Brak opublikowanych oddziałów.</p>
          </div>
        )}
      </section>
    </div>
  )
}
