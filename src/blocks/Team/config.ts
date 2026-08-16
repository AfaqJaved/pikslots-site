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
      type: 'array',
      label: 'Team members',
      minRows: 1,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Name',
          required: true,
        },
        {
          name: 'role',
          type: 'text',
          label: 'Role',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Photo',
        },
      ],
    },
  ],
}
