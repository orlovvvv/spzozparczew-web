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
import {
  revalidateProcurement,
  revalidateProcurementDelete,
} from './hooks/revalidateProcurement'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from 'payload'

export const PublicProcurements: CollectionConfig<'publicProcurements'> = {
  slug: 'publicProcurements',
  labels: {
    singular: {
      pl: 'Zamówienie publiczne',
      en: 'Public Procurement',
    },
    plural: {
      pl: 'Zamówienia publiczne',
      en: 'Public Procurements',
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
    procurementNumber: true,
    status: true,
    deadlineDate: true,
    publishDate: true,
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    defaultColumns: ['procurementNumber', 'title', 'status', 'deadlineDate', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: 'publicProcurements',
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'publicProcurements',
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
        pl: 'Tytuł zamówienia',
        en: 'Procurement Title',
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
                  name: 'procurementNumber',
                  type: 'text',
                  required: true,
                  label: {
                    pl: 'Numer postępowania',
                    en: 'Procurement Number',
                  },
                  admin: {
                    placeholder: 'np. ZP.271.12.2025',
                    width: '50%',
                  },
                },
                {
                  name: 'procedureType',
                  type: 'select',
                  label: {
                    pl: 'Tryb postępowania',
                    en: 'Procedure Type',
                  },
                  options: [
                    {
                      label: { pl: 'Tryb podstawowy', en: 'Basic Procedure' },
                      value: 'basic',
                    },
                    {
                      label: { pl: 'Przetarg nieograniczony', en: 'Open Tender' },
                      value: 'open',
                    },
                    {
                      label: { pl: 'Przetarg ograniczony', en: 'Restricted Tender' },
                      value: 'restricted',
                    },
                    {
                      label: { pl: 'Zamówienie z wolnej ręki', en: 'Single Source' },
                      value: 'single-source',
                    },
                    {
                      label: { pl: 'Zapytanie ofertowe', en: 'Request for Quotation' },
                      value: 'rfq',
                    },
                  ],
                  defaultValue: 'basic',
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
                  name: 'publishDate',
                  type: 'date',
                  required: true,
                  label: {
                    pl: 'Data ogłoszenia',
                    en: 'Publish Date',
                  },
                  admin: {
                    date: {
                      pickerAppearance: 'dayOnly',
                      displayFormat: 'd MMM yyy',
                    },
                    width: '33%',
                  },
                },
                {
                  name: 'deadlineDate',
                  type: 'date',
                  label: {
                    pl: 'Termin składania ofert',
                    en: 'Submission Deadline',
                  },
                  admin: {
                    date: {
                      pickerAppearance: 'dayAndTime',
                      displayFormat: 'd MMM yyy HH:mm',
                    },
                    width: '33%',
                  },
                },
                {
                  name: 'openingDate',
                  type: 'date',
                  label: {
                    pl: 'Termin otwarcia ofert',
                    en: 'Opening Date',
                  },
                  admin: {
                    date: {
                      pickerAppearance: 'dayAndTime',
                      displayFormat: 'd MMM yyy HH:mm',
                    },
                    width: '33%',
                  },
                },
              ],
            },
            {
              name: 'estimatedValue',
              type: 'text',
              label: {
                pl: 'Szacunkowa wartość zamówienia',
                en: 'Estimated Value',
              },
              admin: {
                placeholder: 'np. powyżej 130 000 zł netto',
              },
            },
            {
              name: 'euProject',
              type: 'checkbox',
              label: {
                pl: 'Projekt współfinansowany ze środków UE',
                en: 'EU Co-funded Project',
              },
              defaultValue: false,
            },
          ],
        },
        {
          label: {
            pl: 'Opis zamówienia',
            en: 'Description',
          },
          fields: [
            {
              name: 'description',
              type: 'richText',
              label: {
                pl: 'Opis przedmiotu zamówienia',
                en: 'Description',
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
              name: 'cpvCodes',
              type: 'array',
              label: {
                pl: 'Kody CPV',
                en: 'CPV Codes',
              },
              fields: [
                {
                  name: 'code',
                  type: 'text',
                  label: {
                    pl: 'Kod CPV',
                    en: 'CPV Code',
                  },
                  admin: {
                    placeholder: 'np. 33100000-1',
                  },
                },
                {
                  name: 'description',
                  type: 'text',
                  label: {
                    pl: 'Opis',
                    en: 'Description',
                  },
                },
              ],
            },
          ],
        },
        {
          label: {
            pl: 'Załączniki',
            en: 'Attachments',
          },
          fields: [
            {
              name: 'attachments',
              type: 'array',
              label: {
                pl: 'Dokumentacja przetargowa',
                en: 'Procurement Documents',
              },
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  label: {
                    pl: 'Nazwa dokumentu',
                    en: 'Document Name',
                  },
                },
                {
                  name: 'file',
                  type: 'upload',
                  relationTo: 'media',
                  label: {
                    pl: 'Plik',
                    en: 'File',
                  },
                },
                {
                  name: 'category',
                  type: 'select',
                  label: {
                    pl: 'Kategoria',
                    en: 'Category',
                  },
                  options: [
                    {
                      label: { pl: 'Ogłoszenie', en: 'Announcement' },
                      value: 'announcement',
                    },
                    {
                      label: { pl: 'SWZ', en: 'Specification' },
                      value: 'specification',
                    },
                    {
                      label: { pl: 'Załączniki', en: 'Attachments' },
                      value: 'attachments',
                    },
                    {
                      label: { pl: 'Wyjaśnienia', en: 'Clarifications' },
                      value: 'clarifications',
                    },
                    {
                      label: { pl: 'Zmiany', en: 'Amendments' },
                      value: 'amendments',
                    },
                    {
                      label: { pl: 'Wyniki', en: 'Results' },
                      value: 'results',
                    },
                    {
                      label: { pl: 'Umowa', en: 'Contract' },
                      value: 'contract',
                    },
                    {
                      label: { pl: 'Inne', en: 'Other' },
                      value: 'other',
                    },
                  ],
                  defaultValue: 'attachments',
                },
              ],
            },
          ],
        },
        {
          label: {
            pl: 'Kontakt',
            en: 'Contact',
          },
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'contactPerson',
                  type: 'text',
                  label: {
                    pl: 'Osoba do kontaktu',
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
                    pl: 'Telefon',
                    en: 'Phone',
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
                pl: 'Email',
                en: 'Email',
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
      name: 'procurementStatus',
      type: 'select',
      label: {
        pl: 'Status',
        en: 'Status',
      },
      options: [
        {
          label: { pl: 'Aktywne', en: 'Active' },
          value: 'active',
        },
        {
          label: { pl: 'Zakończone', en: 'Closed' },
          value: 'closed',
        },
        {
          label: { pl: 'Unieważnione', en: 'Cancelled' },
          value: 'cancelled',
        },
      ],
      defaultValue: 'active',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'year',
      type: 'number',
      label: {
        pl: 'Rok',
        en: 'Year',
      },
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
      hooks: {
        beforeChange: [
          ({ siblingData }) => {
            if (siblingData.publishDate) {
              const date = new Date(siblingData.publishDate)
              if (!isNaN(date.getTime())) {
                return date.getFullYear()
              }
            }
            return new Date().getFullYear()
          },
        ],
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: {
        pl: 'Opublikowano',
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
    afterChange: [revalidateProcurement],
    afterDelete: [revalidateProcurementDelete],
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
