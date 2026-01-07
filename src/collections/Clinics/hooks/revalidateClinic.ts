import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Clinic } from '../../../payload-types'

export const revalidateClinic: CollectionAfterChangeHook<Clinic> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/poradnie/${doc.slug}`

      payload.logger.info(`Revalidating clinic at path: ${path}`)

      revalidatePath(path)
      revalidatePath('/dla-pacjenta')
      revalidateTag('clinics-sitemap')
    }

    // If the clinic was previously published, we need to revalidate the old path
    if (previousDoc?._status === 'published' && doc._status !== 'published') {
      const oldPath = `/poradnie/${previousDoc.slug}`

      payload.logger.info(`Revalidating old clinic at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidatePath('/dla-pacjenta')
      revalidateTag('clinics-sitemap')
    }
  }
  return doc
}

export const revalidateClinicDelete: CollectionAfterDeleteHook<Clinic> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/poradnie/${doc?.slug}`

    revalidatePath(path)
    revalidatePath('/dla-pacjenta')
    revalidateTag('clinics-sitemap')
  }

  return doc
}
