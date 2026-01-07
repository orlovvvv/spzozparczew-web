import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Department } from '../../../payload-types'

export const revalidateDepartment: CollectionAfterChangeHook<Department> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/oddzialy/${doc.slug}`

      payload.logger.info(`Revalidating department at path: ${path}`)

      revalidatePath(path)
      revalidatePath('/dla-pacjenta')
      revalidateTag('departments-sitemap')
    }

    // If the department was previously published, we need to revalidate the old path
    if (previousDoc?._status === 'published' && doc._status !== 'published') {
      const oldPath = `/oddzialy/${previousDoc.slug}`

      payload.logger.info(`Revalidating old department at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidatePath('/dla-pacjenta')
      revalidateTag('departments-sitemap')
    }
  }
  return doc
}

export const revalidateDepartmentDelete: CollectionAfterDeleteHook<Department> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/oddzialy/${doc?.slug}`

    revalidatePath(path)
    revalidatePath('/dla-pacjenta')
    revalidateTag('departments-sitemap')
  }

  return doc
}
