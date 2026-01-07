import type { Block } from 'payload'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  labels: {
    singular: {
      pl: 'Blok mediów',
      en: 'Media Block',
    },
    plural: {
      pl: 'Bloki mediów',
      en: 'Media Blocks',
    },
  },
  interfaceName: 'MediaBlock',
  fields: [
    {
      name: 'media',
      type: 'upload',
      label: {
        pl: 'Plik',
        en: 'Media',
      },
      relationTo: 'media',
      required: true,
    },
  ],
}
