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
import { revalidateClinic, revalidateClinicDelete } from './hooks/revalidateClinic'

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
import { workingHoursField } from '../../fields/workingHoursField'

export const Clinics: CollectionConfig<'clinics'> = {
  slug: 'clinics',
  labels: {
    singular: {
      pl: 'Poradnia',
      en: 'Clinic',
    },
    plural: {
      pl: 'Poradnie',
      en: 'Clinics',
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
    phone: true,
  },
  admin: {
    defaultColumns: ['name', 'phone', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: 'clinics',
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'clinics',
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
        pl: 'Nazwa poradni',
        en: 'Clinic Name',
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
                  pl: 'Wyświetlany na liście poradni',
                  en: 'Displayed on the clinics list',
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
          ],
        },
        {
          label: {
            pl: 'Kontakt i lokalizacja',
            en: 'Contact & Location',
          },
          fields: contactInfoFields(),
        },
        {
          label: {
            pl: 'Grafik przyjęć',
            en: 'Schedule',
          },
          fields: [workingHoursField()],
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
    afterChange: [revalidateClinic],
    afterDelete: [revalidateClinicDelete],
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
