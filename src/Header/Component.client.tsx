'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'
import type { NavPage } from '@/utilities/getNavPages'

import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
  pages?: NavPage[] | null
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data, pages }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  const logo = data?.logo

  let logoContent: React.ReactNode = null

  if (logo?.type === 'image' && logo.image && typeof logo.image === 'object' && logo.image.url) {
    logoContent = (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={logo.image.url} alt={logo.text || 'Logo'} className="h-9 w-auto" />
    )
  } else if (logo && logo.type !== 'image') {
    logoContent = <span className="text-2xl font-bold text-ink">{logo.text || 'PikSlots'}</span>
  }

  return (
    <header className="container relative z-20   " {...(theme ? { 'data-theme': theme } : {})}>
      <div className="py-8 flex justify-between">
        {logoContent ? (
          <Link href="/">{logoContent}</Link>
        ) : (
          <span className="flex-1" aria-hidden="true" />
        )}
        <HeaderNav data={data} pages={pages} />
      </div>
    </header>
  )
}
