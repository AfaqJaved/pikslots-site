'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'
import type { NavPage } from '@/utilities/getNavPages'

import { CMSLink } from '@/components/Link'
import { ThemeToggle } from '@/components/ThemeToggle'

export const HeaderNav: React.FC<{
  data: HeaderType
  pages?: NavPage[] | null
}> = ({ data, pages }) => {
  const autoPages = data?.showAllPages && pages ? pages : []
  const autoHrefs = new Set(autoPages.map((page) => page.href))

  const manualItems = (data?.navItems || []).filter(({ link }) => {
    if (!link) return false

    const href =
      link.type === 'reference' && typeof link.reference?.value === 'object'
        ? link.reference.value.slug
          ? `${link.reference.relationTo !== 'pages' ? `/${link.reference.relationTo}` : ''}/${
              link.reference.value.slug
            }`
          : null
        : link.url

    return href ? !autoHrefs.has(href) : true
  })

  return (
    <nav className="flex gap-3 items-center">
      {autoPages.map((page) => {
        return (
          <CMSLink
            key={page.href}
            type="custom"
            url={page.href}
            label={page.label}
            appearance="link"
          />
        )
      })}
      {manualItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="link" />
      })}
      <ThemeToggle />
    </nav>
  )
}
