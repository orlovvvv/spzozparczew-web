import type { Payload, PayloadRequest } from 'payload'

import { departmentsData } from './departments-data'
import { clinicsData } from './clinics-data'
import { postsData } from './posts-data'
import { jobsData } from './jobs-data'
import { procurementsData } from './procurements-data'

export const seedMedical = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding medical data...')

  // Clear existing data
  payload.logger.info('— Clearing existing data...')

  const collections = [
    'departments',
    'clinics',
    'posts',
    'jobs',
    'publicProcurements',
  ] as const

  for (const collection of collections) {
    await payload.db.deleteMany({ collection, req, where: {} })
    try {
      await payload.db.deleteVersions({ collection, req, where: {} })
    } catch {
      // Versions might not exist, ignore error
    }
  }

  // Seed departments
  payload.logger.info('— Seeding departments...')
  for (const department of departmentsData) {
    await payload.create({
      collection: 'departments',
      data: department,
      context: { disableRevalidate: true },
    })
  }
  payload.logger.info(`  Created ${departmentsData.length} departments`)

  // Seed clinics
  payload.logger.info('— Seeding clinics...')
  for (const clinic of clinicsData) {
    await payload.create({
      collection: 'clinics',
      data: clinic,
      context: { disableRevalidate: true },
    })
  }
  payload.logger.info(`  Created ${clinicsData.length} clinics`)

  // Seed posts
  payload.logger.info('— Seeding posts...')
  for (const post of postsData) {
    await payload.create({
      collection: 'posts',
      data: post,
      context: { disableRevalidate: true },
    })
  }
  payload.logger.info(`  Created ${postsData.length} posts`)

  // Seed jobs
  payload.logger.info('— Seeding jobs...')
  for (const job of jobsData) {
    await payload.create({
      collection: 'jobs',
      data: job,
      context: { disableRevalidate: true },
    })
  }
  payload.logger.info(`  Created ${jobsData.length} jobs`)

  // Seed public procurements
  payload.logger.info('— Seeding public procurements...')
  for (const procurement of procurementsData) {
    await payload.create({
      collection: 'publicProcurements',
      data: procurement,
      context: { disableRevalidate: true },
    })
  }
  payload.logger.info(`  Created ${procurementsData.length} public procurements`)

  payload.logger.info('All medical data seeded successfully!')
}
