'use client'

import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'

const defaultFaqs = [
  {
    question: 'What is an online Booking Page?',
    answer:
      'Your Booking Page showcases your service menu, availability, and prices online. It has a custom URL and can function as a standalone website. Visitors can self-schedule and pay for appointments 24/7 without having to call, email, or travel to your premises.',
  },
  {
    question: 'What is the difference between my calendar and Booking Page?',
    answer:
      'Your calendar is only visible to you and permitted staff members. Your Booking Page is accessible by anyone and can function as a free booking website or connect to your existing website. The two work in harmony, syncing instantly.',
  },
  {
    question: 'How do I take online payments in advance?',
    answer:
      'Simply enable a payment integration and opt to accept Booking Page payments in your app settings. Choose between Stripe, Square, or PayPal.',
  },
  {
    question: 'Can I connect with other calendars?',
    answer:
      'Yes, 1-way and 2-way sync options are available to connect other calendars. 2-way syncs are particularly popular as they send appointment details to and from your calendar.',
  },
  {
    question: 'How can I get more customers?',
    answer:
      'Your Booking Page connects to your existing website, Facebook, and Instagram, enabling people to learn about your services and self-schedule appointments 24/7. Every online channel becomes an all-new conversion machine.',
  },
]

type FaqItem = {
  question?: string | null
  answer?: string | null
}

export const FAQ: React.FC<{ items?: FaqItem[] | null }> = ({ items }) => {
  const faqs = items?.length ? items : defaultFaqs
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i

        return (
          <div
            key={faq.question || i}
            className="overflow-hidden rounded-xl border border-border bg-card"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-medium text-ink">{faq.question}</span>
              <ChevronDown
                className={`size-5 shrink-0 text-ink-muted transition-transform ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen && (
              <div className="border-t border-border px-6 py-5 text-sm leading-relaxed text-ink-muted">
                {faq.answer}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
