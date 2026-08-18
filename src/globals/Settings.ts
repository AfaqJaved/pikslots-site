import type { GlobalConfig } from 'payload'

import { authenticated } from '@/access/authenticated'

export const Settings: GlobalConfig = {
  slug: 'settings',
  access: {
    read: () => true,
    update: authenticated,
  },
  admin: {
    group: 'Content',
  },
  fields: [
    {
      name: 'primaryColor',
      type: 'text',
      label: 'Primary Brand Color',
      required: true,
      defaultValue: '#3B21B6',
      admin: {
        description:
          'Enter a hex color code (e.g. #3B21B6). Hover and light variants are auto-calculated.',
        placeholder: '#3B21B6',
      },
    },
  ],
}
