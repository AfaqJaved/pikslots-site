import type { GlobalConfig } from 'payload'

import { authenticated } from '@/access/authenticated'
import { revalidateHomepage } from './hooks/revalidateHomepage'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  access: {
    read: () => true,
    update: authenticated,
  },
  admin: {
    group: 'Content',
  },
  hooks: {
    afterChange: [revalidateHomepage],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            {
              name: 'hero',
              type: 'group',
              label: 'Hero section',
              admin: {
                description: 'The main headline section at the top of the homepage.',
              },
              fields: [
                {
                  name: 'badge',
                  type: 'text',
                  label: 'Badge text',
                },
                {
                  name: 'title',
                  type: 'textarea',
                  label: 'Headline',
                },
                {
                  name: 'subtitle',
                  type: 'textarea',
                  label: 'Subtext',
                },
                {
                  name: 'primaryCtaLabel',
                  type: 'text',
                  label: 'Primary button label',
                },
                {
                  name: 'primaryCtaLink',
                  type: 'text',
                  label: 'Primary button link',
                },
                {
                  name: 'secondaryCtaLabel',
                  type: 'text',
                  label: 'Secondary button label',
                },
                {
                  name: 'secondaryCtaLink',
                  type: 'text',
                  label: 'Secondary button link',
                },
              ],
            },
          ],
        },
        {
          label: 'Sections',
          fields: [
            {
              name: 'stats',
              type: 'array',
              label: 'Statistics strip',
              fields: [
                {
                  name: 'value',
                  type: 'text',
                  label: 'Value',
                },
                {
                  name: 'label',
                  type: 'text',
                  label: 'Label',
                },
              ],
            },
            {
              name: 'features',
              type: 'array',
              label: 'Feature cards',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Description',
                },
              ],
            },
            {
              name: 'steps',
              type: 'array',
              label: 'Steps',
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  label: 'Label (e.g. Step 1)',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Description',
                },
              ],
            },
            {
              name: 'integrations',
              type: 'array',
              label: 'Integrations',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  label: 'Name',
                },
              ],
            },
          ],
        },
        {
          label: 'Testimonials',
          fields: [
            {
              name: 'testimonials',
              type: 'array',
              label: 'Customer testimonials',
              fields: [
                {
                  name: 'quote',
                  type: 'textarea',
                  label: 'Quote',
                },
                {
                  name: 'name',
                  type: 'text',
                  label: 'Name',
                },
                {
                  name: 'role',
                  type: 'text',
                  label: 'Role / company',
                },
              ],
            },
          ],
        },
        {
          label: 'Pricing',
          fields: [
            {
              name: 'pricing',
              type: 'array',
              label: 'Pricing plans',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  label: 'Plan name',
                },
                {
                  name: 'price',
                  type: 'text',
                  label: 'Price (leave empty to hide)',
                },
                {
                  name: 'period',
                  type: 'text',
                  label: 'Price period (e.g. "user / month")',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Description',
                },
                {
                  name: 'features',
                  type: 'array',
                  label: 'Features',
                  fields: [
                    {
                      name: 'feature',
                      type: 'text',
                      label: 'Feature',
                    },
                  ],
                },
                {
                  name: 'ctaLabel',
                  type: 'text',
                  label: 'Button label',
                },
                {
                  name: 'ctaLink',
                  type: 'text',
                  label: 'Button link',
                },
                {
                  name: 'highlighted',
                  type: 'checkbox',
                  label: 'Highlight this plan',
                },
              ],
            },
          ],
        },
        {
          label: 'FAQ & CTA',
          fields: [
            {
              name: 'faq',
              type: 'array',
              label: 'Frequently asked questions',
              fields: [
                {
                  name: 'question',
                  type: 'text',
                  label: 'Question',
                },
                {
                  name: 'answer',
                  type: 'textarea',
                  label: 'Answer',
                },
              ],
            },
            {
              name: 'ctaBanner',
              type: 'group',
              label: 'Final call-to-action banner',
              fields: [
                {
                  name: 'title',
                  type: 'textarea',
                  label: 'Headline',
                },
                {
                  name: 'subtitle',
                  type: 'textarea',
                  label: 'Subtext',
                },
                {
                  name: 'primaryCtaLabel',
                  type: 'text',
                  label: 'Button label',
                },
                {
                  name: 'primaryCtaLink',
                  type: 'text',
                  label: 'Button link',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
