import type { CollectionSlug, GlobalSlug, Payload, PayloadRequest } from 'payload'

const collections: CollectionSlug[] = ['media', 'pages', 'team']

const globals: GlobalSlug[] = ['header', 'footer', 'homepage']

// Next.js revalidation errors are normal when seeding the database without a server running
// i.e. running `yarn seed` locally instead of using the admin UI within an active app
export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding database...')

  payload.logger.info(`— Clearing collections and globals...`)

  // clear the database
  await Promise.all(
    globals.map((global) =>
      payload.updateGlobal({
        slug: global,
        data: {},
        depth: 0,
        context: {
          disableRevalidate: true,
        },
      }),
    ),
  )

  await Promise.all(
    collections.map((collection) => payload.db.deleteMany({ collection, req, where: {} })),
  )

  await Promise.all(
    collections
      .filter((collection) => Boolean(payload.collections[collection].config.versions))
      .map((collection) => payload.db.deleteVersions({ collection, req, where: {} })),
  )

  payload.logger.info(`— Seeding pages...`)

  const dev1 = await payload.create({
    collection: 'team',
    depth: 0,
    data: {
      name: 'Developer 1',
      role: 'Role / title',
      description: 'Add a short description and upload a photo.',
      order: 0,
    },
  })

  const dev2 = await payload.create({
    collection: 'team',
    depth: 0,
    data: {
      name: 'Developer 2',
      role: 'Role / title',
      description: 'Add a short description and upload a photo.',
      order: 1,
    },
  })

  await payload.create({
    collection: 'pages',
    depth: 0,
    data: {
      slug: 'about',
      _status: 'published',
      hero: {
        type: 'lowImpact',
      },
      title: 'About',
      layout: [
        {
          blockName: 'Meet the team',
          blockType: 'team',
          heading: 'Meet the team',
          intro: 'The developers who built this website.',
          members: [dev1.id, dev2.id],
        },
      ],
    },
  })

  payload.logger.info(`— Seeding globals...`)

  await Promise.all([
    payload.updateGlobal({
      slug: 'header',
      data: {
        logo: {
          type: 'text',
          text: 'PikSlots',
        },
        showAllPages: true,
      },
    }),
    payload.updateGlobal({
      slug: 'footer',
      data: {
        navItems: [],
      },
    }),
  ])

  payload.logger.info('Seeded database successfully!')
}
