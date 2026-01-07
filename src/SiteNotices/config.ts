import type { GlobalConfig } from 'payload'

import { revalidateSiteNotices } from './hooks/revalidateSiteNotices'

export const SiteNotices: GlobalConfig = {
  slug: 'site-notices',
  label: {
    en: 'Site Notices',
    pl: 'Komunikaty',
  },
  access: {
    read: () => true,
  },
  admin: {
    description: {
      en: 'Important notices displayed on the homepage',
      pl: 'Ważne komunikaty wyświetlane na stronie głównej',
    },
  },
  fields: [
    {
      name: 'notices',
      type: 'array',
      label: {
        en: 'Notices',
        pl: 'Komunikaty',
      },
      admin: {
        initCollapsed: false,
        components: {
          RowLabel: '@/SiteNotices/RowLabel#RowLabel',
        },
      },
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: {
            en: 'Enabled',
            pl: 'Aktywny',
          },
          defaultValue: true,
          admin: {
            description: {
              en: 'Toggle to enable or disable this notice',
              pl: 'Włącz lub wyłącz ten komunikat',
            },
          },
        },
        {
          name: 'title',
          type: 'text',
          label: {
            en: 'Title',
            pl: 'Tytuł',
          },
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: {
            en: 'Description',
            pl: 'Opis',
          },
          required: true,
        },
        {
          name: 'variant',
          type: 'select',
          label: {
            en: 'Style',
            pl: 'Styl',
          },
          defaultValue: 'warning',
          options: [
            { label: { en: 'Info', pl: 'Informacja' }, value: 'info' },
            { label: { en: 'Success', pl: 'Sukces' }, value: 'success' },
            { label: { en: 'Warning', pl: 'Ostrzeżenie' }, value: 'warning' },
            { label: { en: 'Error', pl: 'Błąd / Pilne' }, value: 'error' },
          ],
          required: true,
        },
        {
          type: 'row',
          fields: [
            {
              name: 'startDate',
              type: 'date',
              label: {
                en: 'Start Date',
                pl: 'Data rozpoczęcia',
              },
              admin: {
                width: '50%',
                description: {
                  en: 'Leave empty to show immediately',
                  pl: 'Pozostaw puste, aby pokazać natychmiast',
                },
                date: {
                  pickerAppearance: 'dayAndTime',
                },
              },
            },
            {
              name: 'endDate',
              type: 'date',
              label: {
                en: 'End Date',
                pl: 'Data zakończenia',
              },
              admin: {
                width: '50%',
                description: {
                  en: 'Leave empty to show indefinitely',
                  pl: 'Pozostaw puste, aby pokazywać bezterminowo',
                },
                date: {
                  pickerAppearance: 'dayAndTime',
                },
              },
            },
          ],
        },
        {
          name: 'priority',
          type: 'number',
          label: {
            en: 'Priority',
            pl: 'Priorytet',
          },
          defaultValue: 0,
          admin: {
            description: {
              en: 'Higher number = displayed first',
              pl: 'Wyższa liczba = wyświetlany pierwszy',
            },
          },
        },
        {
          name: 'link',
          type: 'group',
          label: {
            en: 'Link (optional)',
            pl: 'Link (opcjonalnie)',
          },
          fields: [
            {
              name: 'text',
              type: 'text',
              label: {
                en: 'Link Text',
                pl: 'Tekst linku',
              },
            },
            {
              name: 'url',
              type: 'text',
              label: {
                en: 'URL',
                pl: 'URL',
              },
              admin: {
                description: {
                  en: 'Internal path (e.g., /kontakt) or external URL',
                  pl: 'Ścieżka wewnętrzna (np. /kontakt) lub zewnętrzny URL',
                },
              },
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateSiteNotices],
  },
}
