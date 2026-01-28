import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'

interface EmptyPageProps {
  icon: React.ReactNode
  title: string
  description?: string
}

export const EmptyPage: React.FC<EmptyPageProps> = ({
  icon,
  title,
  description = 'Treść w przygotowaniu. Zapraszamy wkrótce.',
}) => {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-lg flex flex-col items-center text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary [&>svg]:h-8 [&>svg]:w-8">
          {icon}
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
          {title}
        </h1>
        <p className="mt-3 text-base text-muted-foreground leading-relaxed max-w-md">
          {description}
        </p>
        <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 px-3.5 py-1.5 text-xs font-medium text-amber-700 dark:text-amber-400">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-500" />
          </span>
          Strona w przygotowaniu
        </div>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} weight="bold" />
          Wróć na stronę główną
        </Link>
      </div>
    </div>
  )
}
