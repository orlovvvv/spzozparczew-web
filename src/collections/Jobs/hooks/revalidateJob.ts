import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Job } from '../../../payload-types'

export const revalidateJob: CollectionAfterChangeHook<Job> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/kariera/${doc.slug}`

      payload.logger.info(`Revalidating job at path: ${path}`)

      revalidatePath(path)
      revalidatePath('/kariera')
      revalidateTag('jobs-sitemap')
    }

    // If the job was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/kariera/${previousDoc.slug}`

      payload.logger.info(`Revalidating old job at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidatePath('/kariera')
      revalidateTag('jobs-sitemap')
    }
  }
  return doc
}

export const revalidateJobDelete: CollectionAfterDeleteHook<Job> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/kariera/${doc?.slug}`

    revalidatePath(path)
    revalidatePath('/kariera')
    revalidateTag('jobs-sitemap')
  }

  return doc
}
