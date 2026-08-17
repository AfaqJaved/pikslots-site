import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'

export const Todos: CollectionConfig<'todos'> = {
  slug: 'todos',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['title', 'isCompleted'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'isCompleted',
      type: 'checkbox',
      required: true,
    },
  ],
}
