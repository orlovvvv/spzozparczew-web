'use client'

import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

import type { Notice } from './types'
import { variantLabels } from './variants'

export const RowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<Notice>()

  const title = data?.data?.title || 'Nowy komunikat'
  const variant = data?.data?.variant || 'warning'
  const enabled = data?.data?.enabled !== false

  const variantLabel = variantLabels[variant as keyof typeof variantLabels] || variant
  const label = `${enabled ? '' : '[WYŁĄCZONY] '}${title} (${variantLabel})`

  return <div>{label}</div>
}
