import type { Block } from 'payload'

export const Code: Block = {
  slug: 'code',
  labels: {
    singular: {
      pl: 'Kod',
      en: 'Code',
    },
    plural: {
      pl: 'Bloki kodu',
      en: 'Code Blocks',
    },
  },
  interfaceName: 'CodeBlock',
  fields: [
    {
      name: 'language',
      type: 'select',
      label: {
        pl: 'Język',
        en: 'Language',
      },
      defaultValue: 'typescript',
      options: [
        {
          label: 'TypeScript',
          value: 'typescript',
        },
        {
          label: 'JavaScript',
          value: 'javascript',
        },
        {
          label: 'CSS',
          value: 'css',
        },
      ],
    },
    {
      name: 'code',
      type: 'code',
      label: false,
      required: true,
    },
  ],
}
