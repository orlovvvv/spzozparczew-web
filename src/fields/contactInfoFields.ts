import type { Field } from 'payload'

export const contactInfoFields = (): Field[] => [
  {
    type: 'row',
    fields: [
      {
        name: 'phone',
        type: 'text',
        label: { pl: 'Telefon', en: 'Phone' },
        admin: {
          width: '50%',
          placeholder: '83 355 21 XX',
        },
      },
      {
        name: 'email',
        type: 'email',
        label: { pl: 'Email', en: 'Email' },
        admin: {
          width: '50%',
        },
      },
    ],
  },
  {
    name: 'location',
    type: 'text',
    label: { pl: 'Lokalizacja', en: 'Location' },
    admin: {
      description: {
        pl: 'np. "Budynek A, Piętro 2, Pokój 204"',
        en: 'e.g. "Building A, Floor 2, Room 204"',
      },
    },
  },
]
