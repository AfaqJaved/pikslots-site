import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { CMSLink } from '@/components/Link'
import { getCachedGlobal } from '@/utilities/getGlobals'

const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  linkedin: Linkedin,
  youtube: Youtube,
} as const

const DEFAULT_ABOUT =
  'PikSlots is the online booking system that lets your customers book, pay, and manage appointments 24/7.'

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []
  const socials = footerData?.socials || []
  const email = footerData?.contact?.email
  const phone = footerData?.contact?.phone

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/">
              <span className="text-2xl font-bold tracking-tight text-ink">PikSlots</span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted">
              {footerData?.about || DEFAULT_ABOUT}
            </p>

            {socials.length > 0 && (
              <div className="mt-6 flex items-center gap-3">
                {socials.map((social) => {
                  const Icon =
                    socialIcons[social.platform as keyof typeof socialIcons] || Facebook

                  return (
                    <a
                      key={`${social.platform}-${social.url}`}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.platform}
                      className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-ink-muted transition-colors hover:border-brand hover:text-brand"
                    >
                      <Icon className="size-4" />
                    </a>
                  )
                })}
              </div>
            )}
          </div>

          {navItems.length > 0 && (
            <div className="lg:col-span-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">Explore</h3>
              <ul className="mt-4 space-y-3">
                {navItems.map(({ link: item }, i) => {
                  return (
                    <li key={i}>
                      <CMSLink
                        className="text-sm text-ink-muted transition-colors hover:text-brand"
                        {...item}
                      />
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {(email || phone) && (
            <div className="lg:col-span-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">Contact</h3>
              <ul className="mt-4 space-y-3">
                {email && (
                  <li className="flex items-center gap-3">
                    <Mail className="size-4 shrink-0 text-brand" />
                    <a
                      href={`mailto:${email}`}
                      className="text-sm text-ink-muted transition-colors hover:text-brand"
                    >
                      {email}
                    </a>
                  </li>
                )}
                {phone && (
                  <li className="flex items-center gap-3">
                    <Phone className="size-4 shrink-0 text-brand" />
                    <a
                      href={`tel:${phone}`}
                      className="text-sm text-ink-muted transition-colors hover:text-brand"
                    >
                      {phone}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-sm text-ink-muted">
            {footerData?.copyrightText ||
              `© ${new Date().getFullYear()} PikSlots. All rights reserved.`}
          </p>

          <Link href="/about" className="text-sm text-ink-muted transition-colors hover:text-brand">
            About
          </Link>
        </div>
      </div>
    </footer>
  )
}
