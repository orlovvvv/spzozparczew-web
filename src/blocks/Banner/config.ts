import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Banner: Block = {
  slug: 'banner',
  labels: {
    singular: {
      pl: 'Baner',
      en: 'Banner',
    },
    plural: {
      pl: 'Banery',
      en: 'Banners',
    },
  },
  fields: [
    {
      name: 'style',
      type: 'select',
      label: {
        pl: 'Styl',
        en: 'Style',
      },
      defaultValue: 'info',
      options: [
        {
          label: { pl: 'Informacja', en: 'Info' },
          value: 'info',
        },
        {
          label: { pl: 'Ostrzeżenie', en: 'Warning' },
          value: 'warning',
        },
        {
          label: { pl: 'Błąd', en: 'Error' },
          value: 'error',
        },
        {
          label: { pl: 'Sukces', en: 'Success' },
          value: 'success',
        },
      ],
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      label: false,
      required: true,
    },
  ],
  interfaceName: 'BannerBlock',
}
