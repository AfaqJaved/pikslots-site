import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'about',
      type: 'textarea',
      label: 'About text',
    },
    {
      name: 'contact',
      type: 'group',
      label: 'Contact details',
      fields: [
        {
          name: 'email',
          type: 'text',
          label: 'Email',
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Phone',
        },
      ],
    },
    {
      name: 'socials',
      type: 'array',
      label: 'Social links',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'platform',
          type: 'select',
          label: 'Platform',
          required: true,
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'X (Twitter)', value: 'twitter' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'YouTube', value: 'youtube' },
          ],
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
          required: true,
        },
      ],
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
          RowLabel: '@/Footer/RowLabel#RowLabel',
        },
      },
    },
    {
      name: 'copyrightText',
      type: 'text',
      label: 'Copyright text',
      admin: {
        description: 'Leave empty to use the default.',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
