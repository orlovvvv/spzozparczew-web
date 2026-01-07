import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { slugField } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  labels: {
    singular: {
      pl: 'Kategoria',
      en: 'Category',
    },
    plural: {
      pl: 'Kategorie',
      en: 'Categories',
    },
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: {
        pl: 'Nazwa',
        en: 'Title',
      },
      required: true,
    },
    slugField({
      position: undefined,
    }),
  ],
}
