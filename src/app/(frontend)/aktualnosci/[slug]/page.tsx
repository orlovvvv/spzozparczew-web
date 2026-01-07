import type { Metadata } from 'next'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  CalendarBlank,
  User,
  ArrowLeft,
  ShareNetwork,
  FacebookLogo,
  TwitterLogo,
  LinkedinLogo,
} from '@phosphor-icons/react/dist/ssr'

import RichText from '@/components/RichText'
import { Media } from '@/components/Media'
import { NewsCard } from '@/components/NewsCard'
import { Badge } from '@/components/ui/badge'
import { formatDate } from '@/utilities/formatDate'
import { generateMeta } from '@/utilities/generateMeta'
import { LivePreviewListener } from '@/components/LivePreviewListener'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  return posts.docs.map(({ slug }) => ({ slug }))
}

type Args = {
  params: Promise<{
    slug: string
  }>
}

export default async function PostPage({ params }: Args) {
  const { slug } = await params
  const { isEnabled: draft } = await draftMode()

  const post = await queryPostBySlug({ slug })

  if (!post) {
    return notFound()
  }

  const { title, heroImage, content, categories, publishedAt, populatedAuthors, relatedPosts } = post

  const authors = populatedAuthors?.map((author) => author.name).filter(Boolean) || []

  return (
    <article className="py-8">
      <div className="container">
        {draft && <LivePreviewListener />}

        {/* Back Link */}
        <Link
          href="/aktualnosci"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} weight="bold" />
          <span>Powrót do aktualności</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            {heroImage && typeof heroImage === 'object' && (
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-8 bg-slate-100 dark:bg-slate-800">
                <Media
                  resource={heroImage}
                  fill
                  imgClassName="object-cover"
                  priority
                />
              </div>
            )}

            {/* Categories */}
            {Array.isArray(categories) && categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {categories.map((cat) => {
                  if (typeof cat === 'object' && cat.title) {
                    return (
                      <Badge key={cat.id} variant="success">
                        {cat.title}
                      </Badge>
                    )
                  }
                  return null
                })}
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
              {title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-slate-200 dark:border-slate-800">
              <span className="flex items-center gap-1.5">
                <CalendarBlank size={16} weight="bold" className="text-primary" />
                {formatDate(publishedAt, 'long')}
              </span>
              {authors.length > 0 && (
                <span className="flex items-center gap-1.5">
                  <User size={16} weight="bold" className="text-primary" />
                  {authors.join(', ')}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
              {content && <RichText data={content} enableGutter={false} />}
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <ShareNetwork size={16} weight="bold" />
                  Udostępnij:
                </span>
                <div className="flex gap-2">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://spzozparczew.pl/aktualnosci/${slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-muted-foreground hover:bg-[#1877F2] hover:text-white transition-colors"
                    aria-label="Udostępnij na Facebook"
                  >
                    <FacebookLogo size={16} weight="fill" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://spzozparczew.pl/aktualnosci/${slug}`)}&text=${encodeURIComponent(title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-muted-foreground hover:bg-[#1DA1F2] hover:text-white transition-colors"
                    aria-label="Udostępnij na Twitter"
                  >
                    <TwitterLogo size={16} weight="fill" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://spzozparczew.pl/aktualnosci/${slug}`)}&title=${encodeURIComponent(title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-muted-foreground hover:bg-[#0A66C2] hover:text-white transition-colors"
                    aria-label="Udostępnij na LinkedIn"
                  >
                    <LinkedinLogo size={16} weight="fill" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Related Posts */}
              {Array.isArray(relatedPosts) && relatedPosts.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-4">
                    Powiązane artykuły
                  </h3>
                  <div className="space-y-4">
                    {relatedPosts.slice(0, 3).map((related) => {
                      if (typeof related === 'object' && related.slug) {
                        return (
                          <NewsCard
                            key={related.id}
                            post={related}
                            variant="horizontal"
                          />
                        )
                      }
                      return null
                    })}
                  </div>
                </div>
              )}

              {/* Contact Card */}
              <div className="bg-primary/5 rounded-xl p-6">
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  Potrzebujesz pomocy?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Skontaktuj się z nami, jeśli masz pytania dotyczące tej informacji.
                </p>
                <a
                  href="tel:+48833552102"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Zadzwoń: 83 355 21 02
                </a>
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
  const post = await queryPostBySlug({ slug })

  return generateMeta({ doc: post })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'posts',
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
