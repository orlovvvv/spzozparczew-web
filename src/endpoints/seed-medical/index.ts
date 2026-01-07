import type { Payload, PayloadRequest } from 'payload'

import { departmentsData } from './departments-data'
import { clinicsData } from './clinics-data'

export const seedMedical = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding medical departments and clinics...')

  // Clear existing data
  payload.logger.info('— Clearing existing departments and clinics...')

  await payload.db.deleteMany({ collection: 'departments', req, where: {} })
  await payload.db.deleteMany({ collection: 'clinics', req, where: {} })

  // Also delete versions if versioning is enabled
  try {
    await payload.db.deleteVersions({ collection: 'departments', req, where: {} })
    await payload.db.deleteVersions({ collection: 'clinics', req, where: {} })
  } catch {
    // Versions might not exist, ignore error
  }

  // Seed departments
  payload.logger.info('— Seeding departments...')

  for (const department of departmentsData) {
    await payload.create({
      collection: 'departments',
      data: department,
      context: {
        disableRevalidate: true,
      },
    })
  }

  payload.logger.info(`  Created ${departmentsData.length} departments`)

  // Seed clinics
  payload.logger.info('— Seeding clinics...')

  for (const clinic of clinicsData) {
    await payload.create({
      collection: 'clinics',
      data: clinic,
      context: {
        disableRevalidate: true,
      },
    })
  }

  payload.logger.info(`  Created ${clinicsData.length} clinics`)

  payload.logger.info('Medical data seeded successfully!')
}
