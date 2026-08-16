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
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  /* Only apply a forced `data-theme` after hydration to avoid a mismatch.
  When no theme is forced, the header inherits the global theme from <html>,
  so the logo and nav stay visible in both light and dark mode. */
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  const effectiveTheme = mounted && headerTheme ? headerTheme : null

  const logo = data?.logo

  let logoContent: React.ReactNode = null

  if (logo?.type === 'image' && logo.image && typeof logo.image === 'object' && logo.image.url) {
    logoContent = (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={logo.image.url} alt={logo.text || 'Logo'} className="h-9 w-auto" />
    )
  } else if (logo && logo.type !== 'image') {
    logoContent = <span className="text-2xl font-bold tracking-tight text-ink">{logo.text || 'PikSlots'}</span>
  }

  return (
    <header
      className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md"
      {...(effectiveTheme ? { 'data-theme': effectiveTheme } : {})}
    >
      <div className="container flex items-center justify-between py-4">
        {logoContent ? (
          <Link href="/" aria-label="Home">
            {logoContent}
          </Link>
        ) : (
          <span className="flex-1" aria-hidden="true" />
        )}
        <HeaderNav data={data} pages={pages} />
      </div>
    </header>
  )
}
