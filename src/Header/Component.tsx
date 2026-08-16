import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { getCachedNavPages } from '@/utilities/getNavPages'
import React from 'react'

export async function Header() {
  const headerData = await getCachedGlobal('header', 1)()

  const pages = headerData?.showAllPages ? await getCachedNavPages() : null

  return <HeaderClient data={headerData} pages={pages} />
}
