import React from 'react'
import Link from 'next/link'
import { CalendarBlank, ArrowRight } from '@phosphor-icons/react/dist/ssr'

import type { Post } from '@/payload-types'
import { cn } from '@/utilities/ui'
import { formatDate } from '@/utilities/formatDate'
import { truncate } from '@/utilities/truncate'
import { Media } from '@/components/Media'
import { Badge } from '@/components/ui/badge'

interface NewsCardProps {
  post: Post
  className?: string
  variant?: 'default' | 'horizontal' | 'featured'
}

export const NewsCard: React.FC<NewsCardProps> = ({
  post,
  className,
  variant = 'default',
}) => {
  const { title, slug, heroImage, categories, meta, publishedAt } = post

  const description = meta?.description || ''
  const category = Array.isArray(categories) && categories.length > 0
    ? (typeof categories[0] === 'object' ? categories[0].title : null)
    : null

  if (variant === 'horizontal') {
    return (
      <Link
        href={`/aktualnosci/${slug}`}
        className={cn(
          'group flex gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300',
          className,
        )}
      >
        <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800">
          {heroImage && typeof heroImage === 'object' && (
            <Media
              resource={heroImage}
              fill
              imgClassName="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}
        </div>
        <div className="flex-1 min-w-0">
          {category && (
            <Badge variant="secondary" className="mb-2 text-[10px]">
              {category}
            </Badge>
          )}
          <h3 className="font-semibold text-foreground text-sm line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
            <CalendarBlank size={12} weight="bold" />
            {formatDate(publishedAt, 'short')}
          </p>
        </div>
      </Link>
    )
  }

  if (variant === 'featured') {
    return (
      <Link
        href={`/aktualnosci/${slug}`}
        className={cn(
          'group relative rounded-2xl overflow-hidden bg-slate-900 aspect-[16/10] flex flex-col justify-end',
          className,
        )}
      >
        {heroImage && typeof heroImage === 'object' && (
          <Media
            resource={heroImage}
            fill
            imgClassName="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
        <div className="relative p-6">
          {category && (
            <Badge variant="success" className="mb-3">
              {category}
            </Badge>
          )}
          <h3 className="font-semibold text-white text-xl leading-tight line-clamp-2 group-hover:text-primary-foreground transition-colors">
            {title}
          </h3>
          <p className="text-sm text-slate-300 mt-2 line-clamp-2">
            {truncate(description, 120)}
          </p>
          <p className="text-xs text-slate-400 mt-3 flex items-center gap-1">
            <CalendarBlank size={12} weight="bold" />
            {formatDate(publishedAt, 'long')}
          </p>
        </div>
      </Link>
    )
  }

  // Default card variant
  return (
    <Link
      href={`/aktualnosci/${slug}`}
      className={cn(
        'group flex flex-col rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300',
        className,
      )}
    >
      <div className="relative aspect-[16/10] bg-slate-100 dark:bg-slate-800 overflow-hidden">
        {heroImage && typeof heroImage === 'object' && (
          <Media
            resource={heroImage}
            fill
            imgClassName="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
        {category && (
          <div className="absolute top-3 left-3">
            <Badge variant="success" className="shadow-sm">
              {category}
            </Badge>
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
          <CalendarBlank size={12} weight="bold" />
          {formatDate(publishedAt, 'short')}
        </p>
        <h3 className="font-semibold text-foreground leading-tight line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2 flex-1">
          {truncate(description, 100)}
        </p>
        <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
          <span>Czytaj więcej</span>
          <ArrowRight size={14} weight="bold" className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}

export default NewsCard
