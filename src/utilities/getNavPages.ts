import configPromise from '@payload-config'
import { unstable_cache } from 'next/cache'
import { getPayload } from 'payload'

export type NavPage = {
  label: string
  href: string
}

async function getNavPages(): Promise<NavPage[]> {
  const payload = await getPayload({ config: configPromise })

  const { docs } = await payload.find({
    collection: 'pages',
    depth: 0,
    pagination: false,
    sort: 'title',
    where: {
      slug: {
        not_equals: 'home',
      },
    },
  })

  return docs
    .filter((page) => page._status === 'published' || !page._status)
    .map((page) => ({
      label: page.title,
      href: `/${page.slug}`,
    }))
}

export const getCachedNavPages = unstable_cache(getNavPages, ['nav-pages'], {
  tags: ['nav-pages'],
})
