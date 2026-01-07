import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { PublicProcurement } from '../../../payload-types'

export const revalidateProcurement: CollectionAfterChangeHook<PublicProcurement> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/przetargi/${doc.slug}`

      payload.logger.info(`Revalidating procurement at path: ${path}`)

      revalidatePath(path)
      revalidatePath('/przetargi')
      revalidateTag('procurements-sitemap')
    }

    // If the procurement was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/przetargi/${previousDoc.slug}`

      payload.logger.info(`Revalidating old procurement at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidatePath('/przetargi')
      revalidateTag('procurements-sitemap')
    }
  }
  return doc
}

export const revalidateProcurementDelete: CollectionAfterDeleteHook<PublicProcurement> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/przetargi/${doc?.slug}`

    revalidatePath(path)
    revalidatePath('/przetargi')
    revalidateTag('procurements-sitemap')
  }

  return doc
}
