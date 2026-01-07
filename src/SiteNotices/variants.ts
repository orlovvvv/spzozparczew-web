import { CheckCircle, Info, Warning, XCircle } from '@phosphor-icons/react'

import type { NoticeVariant } from './types'

export const variantConfig = {
  info: {
    icon: Info,
    containerClass: 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800',
    iconClass: 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400',
    titleClass: 'text-blue-800 dark:text-blue-200',
    linkClass:
      'text-blue-700 dark:text-blue-300 decoration-blue-300 dark:decoration-blue-600 hover:decoration-blue-500',
  },
  success: {
    icon: CheckCircle,
    containerClass: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800',
    iconClass: 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400',
    titleClass: 'text-emerald-800 dark:text-emerald-200',
    linkClass:
      'text-emerald-700 dark:text-emerald-300 decoration-emerald-300 dark:decoration-emerald-600 hover:decoration-emerald-500',
  },
  warning: {
    icon: Warning,
    containerClass: 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800',
    iconClass: 'bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400',
    titleClass: 'text-amber-800 dark:text-amber-200',
    linkClass:
      'text-amber-700 dark:text-amber-300 decoration-amber-300 dark:decoration-amber-600 hover:decoration-amber-500',
  },
  error: {
    icon: XCircle,
    containerClass: 'bg-destructive/5 border-destructive/20',
    iconClass: 'bg-destructive/10 text-destructive',
    titleClass: 'text-destructive',
    linkClass: 'text-destructive decoration-destructive/30 hover:decoration-destructive/60',
  },
} as const

export const variantLabels: Record<NoticeVariant, string> = {
  info: 'Info',
  success: 'Sukces',
  warning: 'Ostrzeżenie',
  error: 'Pilne',
}

export function getVariantConfig(variant: string | null | undefined) {
  return variantConfig[(variant as NoticeVariant) || 'warning'] || variantConfig.warning
}
