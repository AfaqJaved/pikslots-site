import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import { HomePage } from '@/components/home/HomePage'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'

import { generateMeta } from '@/utilities/generateMeta'

// Renders per-request instead of at build time, since the Docker build has no
// access to the database (see prod/docker-compose.yml networking notes).
export const dynamic = 'force-dynamic'

export default async function Page() {
  return (
    <>
      <PayloadRedirects disableNotFound url="/" />
      <HomePage />
    </>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await queryHomePage()

  return generateMeta({ doc: page })
}

const queryHomePage = cache(async () => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: {
        equals: 'home',
      },
    },
  })

  return result.docs?.[0] || null
})
