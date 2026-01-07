import type { SiteNotice } from '@/payload-types'
import { getCachedGlobal } from '@/utilities/getGlobals'

import { SiteNoticesClient } from './Component.client'
import type { Notice } from './types'

function isNoticeActive(notice: Notice): boolean {
  if (!notice.enabled) return false

  const now = new Date()

  if (notice.startDate) {
    const startDate = new Date(notice.startDate)
    if (now < startDate) return false
  }

  if (notice.endDate) {
    const endDate = new Date(notice.endDate)
    if (now > endDate) return false
  }

  return true
}

export async function SiteNotices() {
  const siteNotices = (await getCachedGlobal('site-notices', 0)()) as SiteNotice | null

  const notices = siteNotices?.notices || []

  // Filter active notices and sort by priority (higher first)
  const activeNotices = notices
    .filter(isNoticeActive)
    .sort((a: Notice, b: Notice) => (b.priority || 0) - (a.priority || 0))

  if (activeNotices.length === 0) {
    return null
  }

  return <SiteNoticesClient notices={activeNotices} />
}
