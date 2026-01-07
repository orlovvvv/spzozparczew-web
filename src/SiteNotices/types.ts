import type { SiteNotice } from '@/payload-types'

export type Notice = NonNullable<SiteNotice['notices']>[number]

export type NoticeVariant = 'info' | 'success' | 'warning' | 'error'
