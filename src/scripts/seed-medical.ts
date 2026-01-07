import 'dotenv/config'
import { getPayload } from 'payload'
import config from '@payload-config'
import { seedMedical } from '../endpoints/seed-medical'

async function run() {
  const payload = await getPayload({ config })

  await seedMedical({
    payload,
    req: {} as any,
  })

  process.exit(0)
}

run().catch((err) => {
  console.error('Error seeding medical data:', err)
  process.exit(1)
})
