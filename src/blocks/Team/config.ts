import type { Block } from 'payload'

export const Team: Block = {
  slug: 'team',
  interfaceName: 'TeamBlock',
  labels: {
    singular: 'Team',
    plural: 'Team',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
    },
    {
      name: 'intro',
      type: 'textarea',
      label: 'Intro text',
    },
    {
      name: 'members',
      type: 'relationship',
      relationTo: 'team',
      hasMany: true,
      label: 'Team members',
      required: true,
    },
  ],
}
