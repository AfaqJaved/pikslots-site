import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'group',
      label: 'Logo',
      admin: {
        description: 'Pick a text logo (letters) or upload an image logo.',
      },
      fields: [
        {
          name: 'type',
          type: 'radio',
          label: 'Logo type',
          defaultValue: 'text',
          options: [
            {
              label: 'Text (letters)',
              value: 'text',
            },
            {
              label: 'Image',
              value: 'image',
            },
          ],
        },
        {
          name: 'text',
          type: 'text',
          label: 'Logo text',
          admin: {
            condition: (_, siblingData) => siblingData?.type !== 'image',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo image',
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'image',
          },
        },
      ],
    },
    {
      name: 'showAllPages',
      type: 'checkbox',
      label: 'Show all published pages in the menu',
      defaultValue: true,
      admin: {
        description:
          'When enabled, every published page appears automatically in the header menu. Turn off to manage the menu manually below.',
      },
    },
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
