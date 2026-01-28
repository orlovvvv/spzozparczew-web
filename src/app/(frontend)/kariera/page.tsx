import type { Metadata } from 'next'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import Link from 'next/link'
import { Briefcase, Users, Heart, Building } from '@phosphor-icons/react/dist/ssr'

import { JobCard } from '@/components/JobCard'
import { Pagination } from '@/components/Pagination'

export const metadata: Metadata = {
  title: 'Kariera | SPZOZ Parczew',
  description: 'Oferty pracy w Samodzielnym Publicznym Zakładzie Opieki Zdrowotnej w Parczewie. Dołącz do naszego zespołu.',
}

interface PageProps {
  searchParams: Promise<{
    page?: string
    status?: string
  }>
}

export default async function JobsListingPage({ searchParams }: PageProps) {
  const { page: pageParam, status } = await searchParams
  const page = parseInt(pageParam || '1', 10)
  const limit = 10

  const payload = await getPayload({ config: configPromise })

  const jobs = await payload.find({
    collection: 'jobs',
    depth: 1,
    limit,
    page,
    sort: '-publishedAt',
    where: {
      _status: {
        equals: 'published',
      },
      ...(status && status !== 'all' && {
        recruitmentStatus: {
          equals: status,
        },
      }),
    },
  })

  // Get active jobs count for display
  const activeJobsCount = await payload.count({
    collection: 'jobs',
    where: {
      _status: { equals: 'published' },
      recruitmentStatus: { equals: 'active' },
    },
  })

  return (
    <div className="py-16">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Briefcase size={20} weight="duotone" className="text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground tracking-tight">Kariera</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Dołącz do zespołu SPZOZ Parczew. Poszukujemy wykwalifikowanych specjalistów,
            którzy chcą wspólnie z nami dbać o zdrowie mieszkańców naszego regionu.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-primary/5 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-1">{activeJobsCount.totalDocs}</div>
            <div className="text-sm text-muted-foreground">Aktywnych ofert</div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 text-center">
            <Users size={32} weight="duotone" className="text-primary mx-auto mb-2" />
            <div className="text-sm text-muted-foreground">Przyjazny zespół</div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 text-center">
            <Heart size={32} weight="duotone" className="text-primary mx-auto mb-2" />
            <div className="text-sm text-muted-foreground">Misja pomocy</div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 text-center">
            <Building size={32} weight="duotone" className="text-primary mx-auto mb-2" />
            <div className="text-sm text-muted-foreground">Stabilne zatrudnienie</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <Link
              href="/kariera"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !status || status === 'all'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-slate-100 dark:bg-slate-800 text-muted-foreground hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Wszystkie
            </Link>
            <Link
              href="/kariera?status=active"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                status === 'active'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-slate-100 dark:bg-slate-800 text-muted-foreground hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Aktywne
            </Link>
            <Link
              href="/kariera?status=closed"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                status === 'closed'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-slate-100 dark:bg-slate-800 text-muted-foreground hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Zakończone
            </Link>
          </div>
        </div>

        {/* Jobs List */}
        {jobs.docs.length > 0 ? (
          <>
            {/* Table Header (desktop only) */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-3 bg-slate-50 dark:bg-slate-800 rounded-t-xl text-sm font-medium text-muted-foreground">
              <div className="col-span-5">Stanowisko</div>
              <div className="col-span-2">Lokalizacja</div>
              <div className="col-span-2">Typ umowy</div>
              <div className="col-span-2">Termin</div>
              <div className="col-span-1 text-right">Status</div>
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block border border-slate-100 dark:border-slate-800 rounded-b-xl overflow-hidden">
              {jobs.docs.map((job) => (
                <JobCard key={job.id} job={job} variant="table" />
              ))}
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden grid grid-cols-1 gap-4">
              {jobs.docs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>

            {/* Pagination */}
            {jobs.totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <Pagination page={page} totalPages={jobs.totalPages} />
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <Briefcase size={48} weight="duotone" className="text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-foreground mb-2">Brak ofert pracy</h2>
            <p className="text-muted-foreground">
              {status && status !== 'all'
                ? 'Nie znaleziono ofert o wybranym statusie.'
                : 'Aktualnie nie prowadzimy rekrutacji. Zapraszamy do sprawdzenia w późniejszym terminie.'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
