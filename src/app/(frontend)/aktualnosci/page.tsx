import type { Metadata } from 'next'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import Link from 'next/link'
import { Newspaper } from '@phosphor-icons/react/dist/ssr'

import { NewsCard } from '@/components/NewsCard'
import { Pagination } from '@/components/Pagination'

export const metadata: Metadata = {
  title: 'Aktualności | SPZOZ Parczew',
  description: 'Najnowsze wiadomości i aktualności z Samodzielnego Publicznego Zakładu Opieki Zdrowotnej w Parczewie.',
}

interface PageProps {
  searchParams: Promise<{
    page?: string
    category?: string
  }>
}

export default async function NewsListingPage({ searchParams }: PageProps) {
  const { page: pageParam, category } = await searchParams
  const page = parseInt(pageParam || '1', 10)
  const limit = 12

  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit,
    page,
    sort: '-publishedAt',
    where: {
      _status: {
        equals: 'published',
      },
      ...(category && {
        'categories.slug': {
          equals: category,
        },
      }),
    },
  })

  const categories = await payload.find({
    collection: 'categories',
    limit: 100,
    sort: 'title',
  })

  return (
    <div className="py-16">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Newspaper size={20} weight="duotone" className="text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground tracking-tight">Aktualności</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Bądź na bieżąco z najnowszymi informacjami dotyczącymi naszego szpitala,
            zmianami w funkcjonowaniu placówki oraz ważnymi komunikatami dla pacjentów.
          </p>
        </div>

        {/* Categories Filter */}
        {categories.docs.length > 0 && (
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              <Link
                href="/aktualnosci"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  !category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-slate-100 dark:bg-slate-800 text-muted-foreground hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                Wszystkie
              </Link>
              {categories.docs.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/aktualnosci?category=${cat.slug}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === cat.slug
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-slate-100 dark:bg-slate-800 text-muted-foreground hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat.title}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Posts Grid */}
        {posts.docs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.docs.map((post) => (
                <NewsCard key={post.id} post={post} />
              ))}
            </div>

            {/* Pagination */}
            {posts.totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <Pagination page={page} totalPages={posts.totalPages} />
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <Newspaper size={48} weight="duotone" className="text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-foreground mb-2">Brak aktualności</h2>
            <p className="text-muted-foreground">
              {category
                ? 'Nie znaleziono aktualności w wybranej kategorii.'
                : 'Aktualnie nie ma żadnych opublikowanych wiadomości.'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
