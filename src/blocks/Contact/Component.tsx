'use client'

import React, { useState } from 'react'

import type { ContactBlock as ContactBlockProps } from '@/payload-types'

import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

export const ContactBlock: React.FC<ContactBlockProps> = ({
  heading,
  description,
  contactInfo,
  form,
}) => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="container py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-ink md:text-4xl">{heading || 'Get in touch'}</h2>
        {description && <p className="mt-4 text-lg text-ink-muted">{description}</p>}
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-10 md:grid-cols-2">
        <div className="space-y-6">
          {contactInfo?.email && (
            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Mail className="size-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-ink-muted">Email</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-medium text-ink hover:text-brand"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          )}
          {contactInfo?.phone && (
            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Phone className="size-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-ink-muted">Phone</p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="font-medium text-ink hover:text-brand"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          )}
          {contactInfo?.address && (
            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <MapPin className="size-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-ink-muted">Address</p>
                <p className="font-medium text-ink">{contactInfo.address}</p>
              </div>
            </div>
          )}
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <CheckCircle className="mb-4 size-12 text-brand" />
              <p className="text-lg font-semibold text-ink">
                {form?.successMessage || 'Thank you! We will get back to you shortly.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-hover"
              >
                <Send className="size-4" />
                {form?.submitLabel || 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
