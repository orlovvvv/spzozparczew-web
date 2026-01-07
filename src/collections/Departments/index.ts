import type { CollectionConfig } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
  UnorderedListFeature,
  OrderedListFeature,
  BoldFeature,
  ItalicFeature,
  LinkFeature,
} from '@payloadcms/richtext-lexical'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDepartment, revalidateDepartmentDelete } from './hooks/revalidateDepartment'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from 'payload'

import { contactInfoFields } from '../../fields/contactInfoFields'
import { phosphorIconField } from '../../fields/phosphorIconField'

export const Departments: CollectionConfig<'departments'> = {
  slug: 'departments',
  labels: {
    singular: {
      pl: 'Oddział',
      en: 'Department',
    },
    plural: {
      pl: 'Oddziały',
      en: 'Departments',
    },
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    name: true,
    slug: true,
    icon: true,
    shortDescription: true,
    isEmergency: true,
    phone: true,
  },
  admin: {
    defaultColumns: ['name', 'isEmergency', 'phone', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: 'departments',
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'departments',
        req,
      }),
    useAsTitle: 'name',
    group: {
      pl: 'Struktura',
      en: 'Structure',
    },
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: {
        pl: 'Nazwa oddziału',
        en: 'Department Name',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: {
            pl: 'Informacje podstawowe',
            en: 'Basic Information',
          },
          fields: [
            phosphorIconField(),
            {
              name: 'shortDescription',
              type: 'text',
              label: {
                pl: 'Krótki opis',
                en: 'Short Description',
              },
              admin: {
                description: {
                  pl: 'Wyświetlany na liście oddziałów',
                  en: 'Displayed on the departments list',
                },
              },
            },
            {
              name: 'description',
              type: 'richText',
              label: {
                pl: 'Pełny opis',
                en: 'Full Description',
              },
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    UnorderedListFeature(),
                    OrderedListFeature(),
                    BoldFeature(),
                    ItalicFeature(),
                    LinkFeature(),
                  ]
                },
              }),
            },
            {
              name: 'isEmergency',
              type: 'checkbox',
              label: {
                pl: 'Oddział ratunkowy (SOR)',
                en: 'Emergency Department',
              },
              defaultValue: false,
              admin: {
                description: {
                  pl: 'Zaznacz jeśli jest to Szpitalny Oddział Ratunkowy',
                  en: 'Check if this is an Emergency Department',
                },
              },
            },
          ],
        },
        {
          label: {
            pl: 'Kontakt i lokalizacja',
            en: 'Contact & Location',
          },
          fields: [
            ...contactInfoFields(),
            {
              name: 'workingHours',
              type: 'textarea',
              label: {
                pl: 'Godziny pracy',
                en: 'Working Hours',
              },
              admin: {
                rows: 4,
                placeholder: 'np. Całodobowo lub Poniedziałek-Piątek 8:00-18:00',
              },
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: {
        pl: 'Data publikacji',
        en: 'Published At',
      },
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    {
      name: 'sortOrder',
      type: 'number',
      label: {
        pl: 'Kolejność sortowania',
        en: 'Sort Order',
      },
      defaultValue: 0,
      admin: {
        position: 'sidebar',
        description: {
          pl: 'Mniejsza liczba = wyżej na liście',
          en: 'Lower number = higher on list',
        },
      },
    },
    slugField(),
  ],
  hooks: {
    afterChange: [revalidateDepartment],
    afterDelete: [revalidateDepartmentDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
