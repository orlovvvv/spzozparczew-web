import type { Metadata } from 'next'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import Link from 'next/link'
import {
  Phone,
  Flask,
  CaretRight,
  Newspaper,
  ArrowRight,
  UserCircle,
  Briefcase,
} from '@phosphor-icons/react/dist/ssr'

import { SiteNotices } from '@/SiteNotices/Component'

import { NewsCard } from '@/components/NewsCard'
import { formatDate } from '@/utilities/formatDate'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'SPZOZ Parczew - Samodzielny Publiczny Zakład Opieki Zdrowotnej',
  description:
    'Samodzielny Publiczny Zakład Opieki Zdrowotnej w Parczewie. Oferujemy nowoczesną diagnostykę i opiekę specjalistyczną.',
}

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise })

  // Fetch latest posts
  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 3,
    overrideAccess: false,
    sort: '-publishedAt',
    where: {
      _status: {
        equals: 'published',
      },
    },
  })

  // Fetch latest jobs
  const jobs = await payload.find({
    collection: 'jobs',
    depth: 1,
    limit: 3,
    overrideAccess: false,
    sort: '-publishedAt',
    where: {
      _status: {
        equals: 'published',
      },
      status: {
        equals: 'active',
      },
    },
  })

  // Fetch latest procurements
  const procurements = await payload.find({
    collection: 'publicProcurements',
    depth: 1,
    limit: 3,
    overrideAccess: false,
    sort: '-publishDate',
    where: {
      _status: {
        equals: 'published',
      },
    },
  })

  return (
    <div>
      {/* Site Notices - CMS managed */}
      <SiteNotices />

      {/* Action Cards */}
      <section className="pt-8 pb-4">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/przyjecie"
              className="group flex items-center gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <UserCircle size={24} weight="duotone" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  Pacjent
                </h2>
                <p className="text-sm text-muted-foreground">
                  Znajdź poradnię, przyjęcie, odwiedziny
                </p>
              </div>
            </Link>
            <Link
              href="/kariera"
              className="group flex items-center gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                <Briefcase size={24} weight="duotone" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-foreground group-hover:text-blue-600 transition-colors">
                  Kariera
                </h2>
                <p className="text-sm text-muted-foreground">
                  Dołącz do naszego zespołu
                </p>
              </div>
            </Link>
            <Link
              href="/laboratorium/wyniki"
              className="group flex items-center gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/50 transition-colors">
                <Flask size={24} weight="duotone" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-foreground group-hover:text-emerald-600 transition-colors">
                  Wyniki Online
                </h2>
                <p className="text-sm text-muted-foreground">
                  Sprawdź wyniki badań
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative pt-8 pb-20 overflow-hidden">
        <div className="container relative z-10 text-center md:text-left">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.1] mb-6">
              Celem do którego dążymy jest{' '}
              <span className="text-primary">zdrowie naszych pacjentów</span>.
            </h1>
            <p className="text-lg text-muted-foreground font-normal leading-relaxed max-w-2xl mb-8">
              Oferujemy nowoczesną diagnostykę i opiekę specjalistyczną. Nasz zespół dba o Twoje
              bezpieczeństwo i komfort na każdym etapie leczenia.
            </p>
            <div className="flex flex-wrap gap-4 md:justify-start justify-center">
              <Link
                href="/oddzialy"
                className="inline-flex items-center gap-2 text-sm font-medium text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 px-6 py-3 rounded-lg hover:bg-slate-800 dark:hover:bg-white transition-colors shadow-lg shadow-slate-900/10"
              >
                Oddziały Szpitalne
                <ArrowRight size={16} weight="bold" />
              </Link>
              <Link
                href="/dla-pacjenta"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-6 py-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                Informacje dla Pacjenta
                <ArrowRight size={16} weight="bold" />
              </Link>
            </div>
          </div>

          {/* Patient Info Card */}
          <div className="mt-12 bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 flex flex-col lg:flex-row gap-8 lg:gap-12 border border-slate-100 dark:border-slate-800">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm text-primary flex items-center justify-center border border-slate-100 dark:border-slate-700">
                  <Phone size={18} weight="bold" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg tracking-tight">
                    Rejestracja Telefoniczna
                  </h3>
                  <p className="text-muted-foreground text-sm font-medium">Czynne pn-pt 7:00 - 15:00</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Diagnostyka Obrazowa
                  </span>
                  <a
                    href="tel:+48833552192"
                    aria-label="Zadzwoń do Diagnostyki Obrazowej: 83 355 21 92"
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    83&nbsp;355&nbsp;21&nbsp;92
                  </a>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Pracownia Endoskopowa
                  </span>
                  <a
                    href="tel:+48833552152"
                    aria-label="Zadzwoń do Pracowni Endoskopowej: 83 355 21 52"
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    83&nbsp;355&nbsp;21&nbsp;52
                  </a>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Poradnie Specjalistyczne
                  </span>
                  <a
                    href="tel:+48833552173"
                    aria-label="Zadzwoń do Poradni Specjalistycznych: 83 355 21 73"
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    83&nbsp;355&nbsp;21&nbsp;73
                  </a>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Zdrowie Psychiczne
                  </span>
                  <a
                    href="tel:+48833552172"
                    aria-label="Zadzwoń do Zdrowia Psychicznego: 83 355 21 72"
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    83&nbsp;355&nbsp;21&nbsp;72
                  </a>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
                <CaretRight size={14} weight="bold" className="text-primary" />
                <span>
                  Rejestracja online dostępna przez{' '}
                  <Link
                    href="/e-portal"
                    className="text-foreground font-medium underline decoration-slate-300 hover:decoration-primary underline-offset-4 transition-colors"
                  >
                    e-Portal Pacjenta
                  </Link>
                </span>
              </div>
            </div>
            <div className="hidden lg:block w-px bg-slate-200 dark:bg-slate-700 my-2" />
            <div className="lg:w-[280px] shrink-0 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm text-blue-600 flex items-center justify-center border border-slate-100 dark:border-slate-700">
                  <Flask size={18} weight="bold" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg tracking-tight">
                    Laboratorium
                  </h3>
                  <p className="text-muted-foreground text-sm font-medium">Strefa Pacjenta</p>
                </div>
              </div>
              <nav className="space-y-1">
                <Link
                  href="/laboratorium/wyniki"
                  className="group flex items-center justify-between p-3 -mx-3 rounded-lg hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm transition-all"
                >
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-primary">
                    Zaloguj się po wyniki
                  </span>
                  <CaretRight
                    size={16}
                    weight="bold"
                    className="text-slate-300 group-hover:text-primary"
                  />
                </Link>
                <Link
                  href="/laboratorium/cennik"
                  className="group flex items-center justify-between p-3 -mx-3 rounded-lg hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm transition-all"
                >
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-primary">
                    Cennik badań
                  </span>
                  <CaretRight
                    size={16}
                    weight="bold"
                    className="text-slate-300 group-hover:text-primary"
                  />
                </Link>
                <Link
                  href="/laboratorium/przygotowanie"
                  className="group flex items-center justify-between p-3 -mx-3 rounded-lg hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm transition-all"
                >
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-primary">
                    Jak się przygotować?
                  </span>
                  <CaretRight
                    size={16}
                    weight="bold"
                    className="text-slate-300 group-hover:text-primary"
                  />
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full opacity-60 blur-3xl -z-10 pointer-events-none" />
      </section>

      {/* News Section */}
      <section id="aktualnosci" className="py-20 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-semibold text-foreground tracking-tight mb-2">
                Aktualności i Komunikaty
              </h2>
              <p className="text-muted-foreground text-base">
                Najnowsze informacje z życia szpitala.
              </p>
            </div>
            <Link
              href="/aktualnosci"
              className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1 group"
            >
              Archiwum wiadomości
              <CaretRight
                size={14}
                weight="bold"
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </div>

          {posts.docs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.docs.map((post) => (
                <NewsCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <Newspaper size={48} weight="duotone" className="mx-auto mb-4 opacity-50" />
              <p>Brak aktualności do wyświetlenia.</p>
            </div>
          )}
        </div>
      </section>

      {/* Jobs Section */}
      <section id="kariera" className="py-20 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-semibold text-foreground tracking-tight">
                Kariera i Praca
              </h2>
              <p className="text-base text-muted-foreground mt-1">
                Aktualne oferty zatrudnienia w naszym szpitalu
              </p>
            </div>
            <Link
              href="/kariera"
              className="text-sm font-medium text-muted-foreground hover:text-primary border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Zobacz wszystkie oferty
            </Link>
          </div>

          {jobs.docs.length > 0 ? (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Stanowisko
                    </th>
                    <th className="px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">
                      Jednostka / Oddział
                    </th>
                    <th className="px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider text-right">
                      Data publikacji
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {jobs.docs.map((job) => (
                    <tr
                      key={job.id}
                      className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group"
                    >
                      <td className="px-6 py-4">
                        <Link href={`/kariera/${job.slug}`} className="block">
                          <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                            {job.position || job.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {job.employmentType === 'full-time'
                              ? 'Pełny etat'
                              : job.employmentType === 'part-time'
                                ? 'Część etatu'
                                : job.employmentType === 'contract'
                                  ? 'Umowa zlecenie'
                                  : 'Umowa o pracę'}
                          </p>
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-xs text-muted-foreground hidden md:table-cell">
                        {job.department || '-'}
                      </td>
                      <td className="px-6 py-4 text-right">
                        {job.publishedAt &&
                        new Date(job.publishedAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) ? (
                          <Badge variant="success">Nowe</Badge>
                        ) : (
                          <span className="text-xs text-muted-foreground">
                            {job.publishedAt ? formatDate(job.publishedAt, 'short') : '-'}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
              <p>Aktualnie nie prowadzimy rekrutacji.</p>
            </div>
          )}
        </div>
      </section>

      {/* Procurements Section */}
      <section id="przetargi" className="py-20 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-semibold text-foreground tracking-tight">
                Postępowania Przetargowe
              </h2>
              <p className="text-base text-muted-foreground mt-1">Biuletyn Informacji Publicznej</p>
            </div>
            <Link
              href="/przetargi"
              className="text-sm font-medium text-muted-foreground hover:text-primary border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Zobacz wszystkie
            </Link>
          </div>

          {procurements.docs.length > 0 ? (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Nr Sprawy
                    </th>
                    <th className="px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Temat
                    </th>
                    <th className="px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider text-right">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {procurements.docs.map((proc) => (
                    <tr
                      key={proc.id}
                      className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group"
                    >
                      <td className="px-6 py-4 text-xs text-muted-foreground">
                        <Link href={`/przetargi/${proc.slug}`}>{proc.procurementNumber}</Link>
                      </td>
                      <td className="px-6 py-4">
                        <Link href={`/przetargi/${proc.slug}`} className="block">
                          <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                            {proc.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Termin składania:{' '}
                            {proc.deadlineDate ? formatDate(proc.deadlineDate, 'short') : '-'}
                          </p>
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Badge
                          variant={
                            proc.status === 'active'
                              ? 'success'
                              : proc.status === 'cancelled'
                                ? 'error'
                                : 'secondary'
                          }
                        >
                          {proc.status === 'active'
                            ? 'W toku'
                            : proc.status === 'cancelled'
                              ? 'Unieważniony'
                              : 'Zakończony'}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
              <p>Brak aktywnych postępowań przetargowych.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
