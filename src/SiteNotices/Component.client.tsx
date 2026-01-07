'use client'

import Link from 'next/link'
import { CaretDown } from '@phosphor-icons/react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/utilities/ui'

import type { Notice } from './types'
import { getVariantConfig } from './variants'

interface SiteNoticesClientProps {
  notices: Notice[]
}

interface NoticeLinkProps {
  href: string
  text: string
  className: string
}

function NoticeLink({ href, text, className }: NoticeLinkProps) {
  const isExternal = href.startsWith('http://') || href.startsWith('https://')

  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4 transition-colors',
        className,
      )}
      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {text}
    </Link>
  )
}

function NoticeContent({ notice }: { notice: Notice }) {
  const config = getVariantConfig(notice.variant)
  const IconComponent = config.icon

  return (
    <div
      className={cn(
        'border rounded-xl p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-start',
        config.containerClass,
      )}
      role="alert"
      aria-live="polite"
    >
      <div
        className={cn(
          'shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center',
          config.iconClass,
        )}
        aria-hidden="true"
      >
        <IconComponent size={20} weight="bold" />
      </div>
      <div className="flex-1">
        <h2
          className={cn(
            'text-lg md:text-xl font-semibold mb-1 md:mb-2 tracking-tight',
            config.titleClass,
          )}
        >
          {notice.title}
        </h2>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
          {notice.description}
        </p>
        {notice.link?.text && notice.link?.url && (
          <NoticeLink href={notice.link.url} text={notice.link.text} className={config.linkClass} />
        )}
      </div>
    </div>
  )
}

export function SiteNoticesClient({ notices }: SiteNoticesClientProps) {
  // If only one notice, show it directly without accordion
  if (notices.length === 1) {
    return (
      <section className="py-6">
        <div className="container">
          <NoticeContent notice={notices[0]} />
        </div>
      </section>
    )
  }

  // Multiple notices - use accordion with first one expanded
  return (
    <section
      className="py-6 border-b border-slate-100 dark:border-slate-800"
      aria-label="Ważne komunikaty"
    >
      <div className="container">
        <Accordion type="single" defaultValue="notice-0" collapsible className="space-y-3">
          {notices.map((notice, index) => {
            const config = getVariantConfig(notice.variant)
            const IconComponent = config.icon

            return (
              <AccordionItem
                key={notice.id || index}
                value={`notice-${index}`}
                className={cn('border rounded-xl overflow-hidden', config.containerClass)}
              >
                <AccordionTrigger
                  className="px-4 md:px-6 py-4 hover:no-underline [&[data-state=open]>div>svg.caret]:rotate-180"
                >
                  <div className="flex items-center gap-3 md:gap-4 text-left">
                    <div
                      className={cn(
                        'shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center',
                        config.iconClass,
                      )}
                      aria-hidden="true"
                    >
                      <IconComponent size={16} weight="bold" className="md:w-5 md:h-5" />
                    </div>
                    <span className={cn('font-semibold tracking-tight', config.titleClass)}>
                      {notice.title}
                    </span>
                    <CaretDown
                      size={16}
                      weight="bold"
                      className={cn(
                        'caret ml-auto transition-transform duration-200',
                        config.titleClass,
                      )}
                      aria-hidden="true"
                    />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 md:px-6 pb-4 md:pb-6">
                  <div className="pl-11 md:pl-14">
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                      {notice.description}
                    </p>
                    {notice.link?.text && notice.link?.url && (
                      <NoticeLink
                        href={notice.link.url}
                        text={notice.link.text}
                        className={config.linkClass}
                      />
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>

        {/* Screen reader announcement for multiple notices */}
        <div className="sr-only" aria-live="polite">
          {notices.length} ważnych komunikatów. Użyj strzałek, aby nawigować między komunikatami.
        </div>
      </div>
    </section>
  )
}
