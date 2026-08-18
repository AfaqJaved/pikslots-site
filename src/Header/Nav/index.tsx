'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

import type { Header as HeaderType } from '@/payload-types'
import type { NavPage } from '@/utilities/getNavPages'

import { ThemeToggle } from '@/components/ThemeToggle'
import { cn } from '@/utilities/ui'

type HeaderNavLink = NonNullable<NonNullable<HeaderType['navItems']>[number]['link']>

const getHref = (link: HeaderNavLink): string | null => {
  if (!link) return null

  if (link.type === 'reference' && typeof link.reference?.value === 'object') {
    const { relationTo, value } = link.reference
    if (value.slug) {
      return `${relationTo !== 'pages' ? `/${relationTo}` : ''}/${value.slug}`
    }
    return null
  }

  return link.url || null
}

export const HeaderNav: React.FC<{
  data: HeaderType
  pages?: NavPage[] | null
}> = ({ data, pages }) => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const autoPages = data?.showAllPages && pages ? pages : []
  const autoHrefs = new Set(autoPages.map((page) => page.href))

  const items = [
    ...autoPages.map((page) => ({ label: page.label, href: page.href })),
    ...(data?.navItems || [])
      .filter(({ link }) => {
        const href = getHref(link)
        return href ? !autoHrefs.has(href) : true
      })
      .map(({ link }) => ({ label: link?.label ?? null, href: getHref(link) }))
      .filter((item): item is { label: string; href: string } => Boolean(item.label) && Boolean(item.href)),
  ]

  const linkClass = (href: string) =>
    cn(
      'rounded-md px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-muted hover:text-ink',
      pathname === href && 'bg-muted text-ink',
    )

  return (
    <>
      <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
        {items.map((item) => (
          <Link key={item.href} className={linkClass(item.href)} href={item.href}>
            {item.label}
          </Link>
        ))}
        <div className="ml-2 flex items-center gap-2">
          <Link
            href="/admin"
            className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
          >
            Login
          </Link>
          <ThemeToggle />
        </div>
      </nav>

      <div className="flex items-center gap-2 md:hidden">
        <Link
          href="/admin"
          className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
        >
          Login
        </Link>
        <ThemeToggle />
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-card text-ink transition-colors hover:bg-muted"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-full border-b border-border bg-background shadow-lg md:hidden">
          <div className="container flex flex-col gap-1 py-4">
            {items.map((item) => (
              <Link
                key={item.href}
                className={linkClass(item.href)}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
