import type { Block } from 'payload'

export const Contact: Block = {
  slug: 'contact',
  interfaceName: 'ContactBlock',
  labels: {
    singular: 'Contact',
    plural: 'Contact',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      defaultValue: 'Get in touch',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      defaultValue: 'Have a question or want to work together? Drop us a message.',
    },
    {
      type: 'group',
      name: 'contactInfo',
      label: 'Contact Information',
      fields: [
        {
          name: 'email',
          type: 'email',
          label: 'Email',
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Phone',
        },
        {
          name: 'address',
          type: 'textarea',
          label: 'Address',
        },
      ],
    },
    {
      type: 'group',
      name: 'form',
      label: 'Form Settings',
      fields: [
        {
          name: 'submitLabel',
          type: 'text',
          label: 'Submit Button Label',
          defaultValue: 'Send Message',
        },
        {
          name: 'successMessage',
          type: 'textarea',
          label: 'Success Message',
          defaultValue: 'Thank you! We will get back to you shortly.',
        },
      ],
    },
  ],
}
