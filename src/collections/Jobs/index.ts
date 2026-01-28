import type { CollectionConfig } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
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
import { revalidateJob, revalidateJobDelete } from './hooks/revalidateJob'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from 'payload'

export const Jobs: CollectionConfig<'jobs'> = {
  slug: 'jobs',
  labels: {
    singular: {
      pl: 'Oferta pracy',
      en: 'Job',
    },
    plural: {
      pl: 'Oferty pracy',
      en: 'Jobs',
    },
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    position: true,
    department: true,
    deadline: true,
    status: true,
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    defaultColumns: ['title', 'position', 'status', 'deadline', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: 'jobs',
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'jobs',
        req,
      }),
    useAsTitle: 'title',
    group: {
      pl: 'Treści',
      en: 'Content',
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: {
        pl: 'Tytuł ogłoszenia',
        en: 'Job Title',
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
            {
              type: 'row',
              fields: [
                {
                  name: 'position',
                  type: 'text',
                  required: true,
                  label: {
                    pl: 'Stanowisko',
                    en: 'Position',
                  },
                  admin: {
                    width: '50%',
                  },
                },
                {
                  name: 'department',
                  type: 'text',
                  label: {
                    pl: 'Oddział/Dział',
                    en: 'Department',
                  },
                  admin: {
                    width: '50%',
                  },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'location',
                  type: 'text',
                  label: {
                    pl: 'Lokalizacja',
                    en: 'Location',
                  },
                  defaultValue: 'Parczew',
                  admin: {
                    width: '50%',
                  },
                },
                {
                  name: 'employmentType',
                  type: 'select',
                  label: {
                    pl: 'Rodzaj umowy',
                    en: 'Employment Type',
                  },
                  options: [
                    {
                      label: { pl: 'Umowa o pracę', en: 'Full-time Employment' },
                      value: 'full-time',
                    },
                    {
                      label: { pl: 'Część etatu', en: 'Part-time' },
                      value: 'part-time',
                    },
                    {
                      label: { pl: 'Umowa zlecenie', en: 'Contract' },
                      value: 'contract',
                    },
                    {
                      label: { pl: 'Umowa o dzieło', en: 'Project-based' },
                      value: 'project',
                    },
                    {
                      label: { pl: 'Staż/Praktyka', en: 'Internship' },
                      value: 'internship',
                    },
                  ],
                  defaultValue: 'full-time',
                  admin: {
                    width: '50%',
                  },
                },
              ],
            },
            {
              name: 'salary',
              type: 'text',
              label: {
                pl: 'Wynagrodzenie',
                en: 'Salary',
              },
              admin: {
                placeholder: 'np. 5000-7000 zł brutto',
              },
            },
          ],
        },
        {
          label: {
            pl: 'Szczegóły oferty',
            en: 'Job Details',
          },
          fields: [
            {
              name: 'description',
              type: 'richText',
              label: {
                pl: 'Opis stanowiska',
                en: 'Job Description',
              },
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
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
              name: 'requirements',
              type: 'richText',
              label: {
                pl: 'Wymagania',
                en: 'Requirements',
              },
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h3', 'h4'] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    UnorderedListFeature(),
                    OrderedListFeature(),
                    BoldFeature(),
                    ItalicFeature(),
                  ]
                },
              }),
            },
            {
              name: 'responsibilities',
              type: 'richText',
              label: {
                pl: 'Zakres obowiązków',
                en: 'Responsibilities',
              },
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h3', 'h4'] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    UnorderedListFeature(),
                    OrderedListFeature(),
                    BoldFeature(),
                    ItalicFeature(),
                  ]
                },
              }),
            },
            {
              name: 'benefits',
              type: 'richText',
              label: {
                pl: 'Oferujemy',
                en: 'Benefits',
              },
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    UnorderedListFeature(),
                    OrderedListFeature(),
                    BoldFeature(),
                    ItalicFeature(),
                  ]
                },
              }),
            },
          ],
        },
        {
          label: {
            pl: 'Aplikowanie',
            en: 'Application',
          },
          fields: [
            {
              name: 'applicationInstructions',
              type: 'richText',
              label: {
                pl: 'Instrukcje aplikowania',
                en: 'Application Instructions',
              },
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h3', 'h4'] }),
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
              name: 'requiredDocuments',
              type: 'array',
              label: {
                pl: 'Wymagane dokumenty',
                en: 'Required Documents',
              },
              fields: [
                {
                  name: 'document',
                  type: 'text',
                  label: {
                    pl: 'Dokument',
                    en: 'Document',
                  },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'contactPerson',
                  type: 'text',
                  label: {
                    pl: 'Osoba kontaktowa',
                    en: 'Contact Person',
                  },
                  admin: {
                    width: '50%',
                  },
                },
                {
                  name: 'contactPhone',
                  type: 'text',
                  label: {
                    pl: 'Telefon kontaktowy',
                    en: 'Contact Phone',
                  },
                  admin: {
                    width: '50%',
                  },
                },
              ],
            },
            {
              name: 'contactEmail',
              type: 'email',
              label: {
                pl: 'Email kontaktowy',
                en: 'Contact Email',
              },
            },
            {
              name: 'attachments',
              type: 'upload',
              relationTo: 'media',
              hasMany: true,
              label: {
                pl: 'Załączniki',
                en: 'Attachments',
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
      name: 'recruitmentStatus',
      type: 'select',
      label: {
        pl: 'Status naboru',
        en: 'Recruitment Status',
      },
      options: [
        {
          label: { pl: 'Aktywny', en: 'Active' },
          value: 'active',
        },
        {
          label: { pl: 'Zakończony', en: 'Closed' },
          value: 'closed',
        },
        {
          label: { pl: 'Wstrzymany', en: 'On Hold' },
          value: 'on-hold',
        },
      ],
      defaultValue: 'active',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'deadline',
      type: 'date',
      label: {
        pl: 'Termin składania dokumentów',
        en: 'Application Deadline',
      },
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'd MMM yyy',
        },
        position: 'sidebar',
      },
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
    slugField(),
  ],
  hooks: {
    afterChange: [revalidateJob],
    afterDelete: [revalidateJobDelete],
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
