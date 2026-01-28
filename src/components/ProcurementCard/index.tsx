import React from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Clock,
  FileText,
  FlagBanner,
} from '@phosphor-icons/react/dist/ssr'

import type { PublicProcurement } from '@/payload-types'
import { cn } from '@/utilities/ui'
import { formatDate, getDaysUntil, isExpired } from '@/utilities/formatDate'
import { Badge } from '@/components/ui/badge'

interface ProcurementCardProps {
  procurement: PublicProcurement
  className?: string
  variant?: 'default' | 'table'
}

const statusLabels: Record<string, string> = {
  'active': 'Aktywne',
  'closed': 'Zakończone',
  'cancelled': 'Unieważnione',
}

type BadgeVariant = 'success' | 'error' | 'warning' | 'secondary'

const statusVariants: Record<string, BadgeVariant> = {
  'active': 'success',
  'closed': 'secondary',
  'cancelled': 'error',
}

const procedureTypeLabels: Record<string, string> = {
  'basic': 'Tryb podstawowy',
  'open': 'Przetarg nieograniczony',
  'restricted': 'Przetarg ograniczony',
  'single-source': 'Zamówienie z wolnej ręki',
  'rfq': 'Zapytanie ofertowe',
}

export const ProcurementCard: React.FC<ProcurementCardProps> = ({
  procurement,
  className,
  variant = 'default',
}) => {
  const {
    title,
    slug,
    procurementNumber,
    procedureType,
    procurementStatus,
    publishDate,
    deadlineDate,
    euProject,
  } = procurement

  const daysLeft = getDaysUntil(deadlineDate)
  const expired = isExpired(deadlineDate)

  if (variant === 'table') {
    return (
      <Link
        href={`/przetargi/${slug}`}
        className={cn(
          'group grid grid-cols-12 gap-4 p-4 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors',
          className,
        )}
      >
        <div className="col-span-12 md:col-span-2">
          <span className="text-sm font-medium text-primary">
            {procurementNumber}
          </span>
          {euProject && (
            <div className="mt-1" title="Projekt UE">
              <FlagBanner size={14} weight="fill" className="text-blue-500" />
            </div>
          )}
        </div>
        <div className="col-span-12 md:col-span-5">
          <h3 className="font-medium text-foreground text-sm line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-xs text-muted-foreground mt-1">
            {procedureType ? procedureTypeLabels[procedureType] : '-'}
          </p>
        </div>
        <div className="col-span-6 md:col-span-2">
          <p className="text-xs text-muted-foreground mb-0.5">Opublikowano</p>
          <p className="text-sm text-foreground">
            {formatDate(publishDate, 'short')}
          </p>
        </div>
        <div className="col-span-6 md:col-span-2">
          <p className="text-xs text-muted-foreground mb-0.5">Termin</p>
          {deadlineDate ? (
            <p className={cn(
              'text-sm flex items-center gap-1',
              expired ? 'text-muted-foreground' : daysLeft !== null && daysLeft <= 7 ? 'text-amber-600 font-medium' : 'text-foreground'
            )}>
              {formatDate(deadlineDate, 'short')}
            </p>
          ) : (
            <p className="text-sm text-muted-foreground">-</p>
          )}
        </div>
        <div className="col-span-12 md:col-span-1 flex items-center justify-end">
          <Badge variant={statusVariants[procurementStatus || 'active']}>
            {statusLabels[procurementStatus || 'active']}
          </Badge>
        </div>
      </Link>
    )
  }

  // Default card variant
  return (
    <Link
      href={`/przetargi/${slug}`}
      className={cn(
        'group flex flex-col rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 p-6',
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium text-primary">
              {procurementNumber}
            </span>
            {euProject && (
              <span title="Projekt UE">
                <FlagBanner size={14} weight="fill" className="text-blue-500" />
              </span>
            )}
          </div>
          <Badge variant={statusVariants[procurementStatus || 'active']}>
            {statusLabels[procurementStatus || 'active']}
          </Badge>
        </div>
      </div>

      <h3 className="font-semibold text-foreground leading-tight line-clamp-2 group-hover:text-primary transition-colors mb-2">
        {title}
      </h3>

      <p className="text-xs text-muted-foreground mb-4">
        {procedureType ? procedureTypeLabels[procedureType] : 'Tryb podstawowy'}
      </p>

      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
        <span className="flex items-center gap-1.5">
          <FileText size={14} weight="bold" className="text-primary" />
          {formatDate(publishDate, 'short')}
        </span>
        {deadlineDate && (
          <span className={cn(
            'flex items-center gap-1.5',
            procurementStatus === 'active' && !expired && daysLeft !== null && daysLeft <= 7
              ? 'text-amber-600 font-medium'
              : ''
          )}>
            <Clock size={14} weight="bold" className={procurementStatus === 'active' && !expired && daysLeft !== null && daysLeft <= 7 ? 'text-amber-600' : 'text-primary'} />
            Termin: {formatDate(deadlineDate, 'short')}
          </span>
        )}
      </div>

      {procurementStatus === 'active' && deadlineDate && !expired && daysLeft !== null && daysLeft <= 7 && (
        <div className="text-xs text-amber-600 bg-amber-50 dark:bg-amber-900/20 px-3 py-2 rounded-lg mb-4">
          {daysLeft === 0 ? 'Ostatni dzień!' : `Pozostało ${daysLeft} dni`}
        </div>
      )}

      <div className="mt-auto flex items-center gap-1 text-sm font-medium text-primary">
        <span>Zobacz szczegóły</span>
        <ArrowRight size={14} weight="bold" className="group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  )
}

export default ProcurementCard
