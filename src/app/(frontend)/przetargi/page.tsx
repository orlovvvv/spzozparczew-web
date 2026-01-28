import type { Metadata } from 'next'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { Scales, FileText, MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

import { ProcurementCard } from '@/components/ProcurementCard'
import { Pagination } from '@/components/Pagination'

export const metadata: Metadata = {
  title: 'Zamówienia Publiczne | SPZOZ Parczew',
  description: 'Zamówienia publiczne Samodzielnego Publicznego Zakładu Opieki Zdrowotnej w Parczewie. Przetargi i postępowania.',
}

interface PageProps {
  searchParams: Promise<{
    page?: string
    status?: string
    year?: string
    search?: string
  }>
}

export default async function ProcurementsListingPage({ searchParams }: PageProps) {
  const { page: pageParam, status, year, search } = await searchParams
  const page = parseInt(pageParam || '1', 10)
  const limit = 15

  const payload = await getPayload({ config: configPromise })

  const procurements = await payload.find({
    collection: 'publicProcurements',
    depth: 1,
    limit,
    page,
    sort: '-publishDate',
    where: {
      _status: {
        equals: 'published',
      },
      ...(status && status !== 'all' && {
        procurementStatus: {
          equals: status,
        },
      }),
      ...(year && {
        year: {
          equals: parseInt(year, 10),
        },
      }),
      ...(search && {
        or: [
          {
            title: {
              contains: search,
            },
          },
          {
            procurementNumber: {
              contains: search,
            },
          },
        ],
      }),
    },
  })

  // Get available years from procurements
  const allProcurements = await payload.find({
    collection: 'publicProcurements',
    limit: 0,
    where: {
      _status: { equals: 'published' },
    },
    select: {
      year: true,
    },
  })

  const years = [...new Set(allProcurements.docs.map((p) => p.year).filter((y): y is number => y !== null && y !== undefined))].sort(
    (a, b) => b - a,
  )

  // Get counts for stats
  const activeProcurementsCount = await payload.count({
    collection: 'publicProcurements',
    where: {
      _status: { equals: 'published' },
      procurementStatus: { equals: 'active' },
    },
  })

  return (
    <div className="py-16">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Scales size={20} weight="duotone" className="text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground tracking-tight">
              Zamówienia Publiczne
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Aktualne i archiwalne postępowania o udzielenie zamówień publicznych
            prowadzone przez SPZOZ w Parczewie.
          </p>
        </div>

        {/* Stats & Actions */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 rounded-lg px-4 py-3">
              <span className="text-2xl font-bold text-primary">{activeProcurementsCount.totalDocs}</span>
              <span className="text-sm text-muted-foreground ml-2">aktywnych</span>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 rounded-lg px-4 py-3">
              <span className="text-2xl font-bold text-foreground">{procurements.totalDocs}</span>
              <span className="text-sm text-muted-foreground ml-2">wszystkich</span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
          {/* Search */}
          <form className="flex-1 min-w-[200px]">
            <div className="relative">
              <MagnifyingGlass
                size={16}
                weight="bold"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="search"
                name="search"
                defaultValue={search || ''}
                placeholder="Szukaj po tytule lub numerze..."
                className="w-full pl-9 pr-4 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </form>

          {/* Status Filter */}
          <div className="flex flex-wrap gap-2">
            <a
              href={`/przetargi${year ? `?year=${year}` : ''}${search ? `${year ? '&' : '?'}search=${search}` : ''}`}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                !status || status === 'all'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-white dark:bg-slate-900 text-muted-foreground hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Wszystkie
            </a>
            <a
              href={`/przetargi?status=active${year ? `&year=${year}` : ''}${search ? `&search=${search}` : ''}`}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                status === 'active'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-white dark:bg-slate-900 text-muted-foreground hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Aktywne
            </a>
            <a
              href={`/przetargi?status=closed${year ? `&year=${year}` : ''}${search ? `&search=${search}` : ''}`}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                status === 'closed'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-white dark:bg-slate-900 text-muted-foreground hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Zakończone
            </a>
          </div>

          {/* Year Filter */}
          {years.length > 0 && (
            <select
              defaultValue={year || ''}
              onChange={(e) => {
                const params = new URLSearchParams()
                if (status && status !== 'all') params.set('status', status)
                if (e.target.value) params.set('year', e.target.value)
                if (search) params.set('search', search)
                window.location.href = `/przetargi${params.toString() ? `?${params}` : ''}`
              }}
              className="px-3 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value="">Wszystkie lata</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Procurements List */}
        {procurements.docs.length > 0 ? (
          <>
            {/* Table Header (desktop only) */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-3 bg-slate-100 dark:bg-slate-800 rounded-t-xl text-xs font-medium text-muted-foreground uppercase tracking-wider">
              <div className="col-span-2">Numer</div>
              <div className="col-span-5">Przedmiot zamówienia</div>
              <div className="col-span-2">Publikacja</div>
              <div className="col-span-2">Termin</div>
              <div className="col-span-1 text-right">Status</div>
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block border border-slate-100 dark:border-slate-800 border-t-0 rounded-b-xl overflow-hidden">
              {procurements.docs.map((procurement) => (
                <ProcurementCard key={procurement.id} procurement={procurement} variant="table" />
              ))}
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden grid grid-cols-1 gap-4">
              {procurements.docs.map((procurement) => (
                <ProcurementCard key={procurement.id} procurement={procurement} />
              ))}
            </div>

            {/* Pagination */}
            {procurements.totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <Pagination page={page} totalPages={procurements.totalPages} />
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <FileText size={48} weight="duotone" className="text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-foreground mb-2">Brak zamówień</h2>
            <p className="text-muted-foreground">
              {search || status || year
                ? 'Nie znaleziono zamówień spełniających kryteria wyszukiwania.'
                : 'Aktualnie nie ma żadnych opublikowanych zamówień publicznych.'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
