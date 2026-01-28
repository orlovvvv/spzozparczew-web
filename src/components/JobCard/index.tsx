import React from 'react'
import Link from 'next/link'
import {
  MapPin,
  Briefcase,
  CalendarBlank,
  ArrowRight,
  Clock,
} from '@phosphor-icons/react/dist/ssr'

import type { Job } from '@/payload-types'
import { cn } from '@/utilities/ui'
import { formatDate, getDaysUntil, isExpired } from '@/utilities/formatDate'
import { Badge } from '@/components/ui/badge'

interface JobCardProps {
  job: Job
  className?: string
  variant?: 'default' | 'table'
}

const employmentTypeLabels: Record<string, string> = {
  'full-time': 'Pełny etat',
  'part-time': 'Część etatu',
  'contract': 'Umowa zlecenie',
  'project': 'Umowa o dzieło',
  'internship': 'Staż/Praktyka',
}

const statusLabels: Record<string, string> = {
  'active': 'Aktywny',
  'closed': 'Zakończony',
  'on-hold': 'Wstrzymany',
}

const statusVariants: Record<string, 'success' | 'error' | 'warning'> = {
  'active': 'success',
  'closed': 'error',
  'on-hold': 'warning',
}

export const JobCard: React.FC<JobCardProps> = ({
  job,
  className,
  variant = 'default',
}) => {
  const {
    title,
    slug,
    position,
    department,
    location,
    employmentType,
    deadline,
    recruitmentStatus,
  } = job

  const daysLeft = getDaysUntil(deadline)
  const expired = isExpired(deadline)

  if (variant === 'table') {
    return (
      <Link
        href={`/kariera/${slug}`}
        className={cn(
          'group grid grid-cols-12 gap-4 p-4 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors',
          className,
        )}
      >
        <div className="col-span-12 md:col-span-5">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {position || title}
          </h3>
          {department && (
            <p className="text-sm text-muted-foreground mt-1">{department}</p>
          )}
        </div>
        <div className="col-span-6 md:col-span-2 flex items-center">
          <span className="text-sm text-muted-foreground flex items-center gap-1.5">
            <MapPin size={14} weight="bold" className="text-primary" />
            {location || 'Parczew'}
          </span>
        </div>
        <div className="col-span-6 md:col-span-2 flex items-center">
          <span className="text-sm text-muted-foreground">
            {employmentType ? employmentTypeLabels[employmentType] : '-'}
          </span>
        </div>
        <div className="col-span-6 md:col-span-2 flex items-center">
          {deadline && (
            <span className={cn(
              'text-sm flex items-center gap-1.5',
              expired ? 'text-destructive' : daysLeft !== null && daysLeft <= 7 ? 'text-amber-600' : 'text-muted-foreground'
            )}>
              <CalendarBlank size={14} weight="bold" />
              {formatDate(deadline, 'short')}
            </span>
          )}
        </div>
        <div className="col-span-6 md:col-span-1 flex items-center justify-end">
          <Badge variant={statusVariants[recruitmentStatus || 'active']}>
            {statusLabels[recruitmentStatus || 'active']}
          </Badge>
        </div>
      </Link>
    )
  }

  // Default card variant
  return (
    <Link
      href={`/kariera/${slug}`}
      className={cn(
        'group flex flex-col rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 p-6',
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <Badge variant={statusVariants[recruitmentStatus || 'active']} className="mb-3">
            {statusLabels[recruitmentStatus || 'active']}
          </Badge>
          <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
            {position || title}
          </h3>
          {department && (
            <p className="text-sm text-muted-foreground mt-1">{department}</p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
        <span className="flex items-center gap-1.5">
          <MapPin size={14} weight="bold" className="text-primary" />
          {location || 'Parczew'}
        </span>
        <span className="flex items-center gap-1.5">
          <Briefcase size={14} weight="bold" className="text-primary" />
          {employmentType ? employmentTypeLabels[employmentType] : 'Pełny etat'}
        </span>
      </div>

      {deadline && (
        <div className={cn(
          'flex items-center gap-1.5 text-sm mb-4 p-3 rounded-lg',
          expired
            ? 'bg-destructive/10 text-destructive'
            : daysLeft !== null && daysLeft <= 7
              ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400'
              : 'bg-slate-50 dark:bg-slate-800 text-muted-foreground'
        )}>
          <Clock size={14} weight="bold" />
          <span>
            {expired
              ? 'Termin minął'
              : daysLeft === 0
                ? 'Ostatni dzień!'
                : daysLeft === 1
                  ? 'Został 1 dzień'
                  : daysLeft !== null && daysLeft <= 7
                    ? `Pozostało ${daysLeft} dni`
                    : `Termin: ${formatDate(deadline, 'short')}`}
          </span>
        </div>
      )}

      <div className="mt-auto flex items-center gap-1 text-sm font-medium text-primary">
        <span>Zobacz szczegóły</span>
        <ArrowRight size={14} weight="bold" className="group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  )
}

export default JobCard
