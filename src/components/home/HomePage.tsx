import {
  ArrowRight,
  BellRing,
  CalendarCheck,
  Check,
  Clock,
  CreditCard,
  Facebook,
  Globe,
  Instagram,
  Link2,
  Mail,
  MessageSquare,
  Palette,
  PhoneCall,
  Puzzle,
  QrCode,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Users,
  Video,
  Wallet,
  Zap,
} from 'lucide-react'
import React from 'react'

import type { Homepage as HomepageData } from '@/payload-types'
import { getCachedGlobal } from '@/utilities/getGlobals'

import { FAQ } from './FAQ'

type Hero = NonNullable<HomepageData['hero']>
type Stat = NonNullable<HomepageData['stats']>[number]
type Feature = NonNullable<HomepageData['features']>[number]
type Step = NonNullable<HomepageData['steps']>[number]
type Integration = NonNullable<HomepageData['integrations']>[number]
type Testimonial = NonNullable<HomepageData['testimonials']>[number]
type Plan = NonNullable<HomepageData['pricing']>[number]
type FaqItem = NonNullable<HomepageData['faq']>[number]
type CtaBanner = NonNullable<HomepageData['ctaBanner']>

const DEFAULT_HERO: Hero = {
  badge: 'Free scheduling software',
  title: 'Organize your business with 24/7 automated online booking',
  subtitle:
    'Automated online booking, reminders, payments, and more. Let your customers book at their convenience while you focus on the work that matters.',
  primaryCtaLabel: 'Start FREE',
  primaryCtaLink: '/contact',
  secondaryCtaLabel: 'Book a demo',
  secondaryCtaLink: '/posts',
}

const DEFAULT_STATS: Stat[] = [
  { value: '165,000+', label: 'Businesses using PikSlots' },
  { value: '24/7', label: 'Automated online booking' },
  { value: '4.6/5', label: 'Average customer rating' },
  { value: '99.9%', label: 'Uptime guarantee' },
]

const DEFAULT_FEATURES: Feature[] = [
  {
    title: 'Stay one step ahead',
    description:
      'Share your online Booking Page and every new appointment lands straight in your calendar.',
  },
  {
    title: 'Reach global customers',
    description: 'Add 1-click Zoom or Google Meet video meeting links to your appointments.',
  },
  {
    title: 'Get paid in advance',
    description: 'Forget chasing invoices by accepting payments easily and securely online.',
  },
  {
    title: 'No more no-shows',
    description: 'Let PikSlots fire out personalized email or text reminders to every customer.',
  },
]

const DEFAULT_STEPS: Step[] = [
  {
    label: 'Step 1',
    title: 'Create your Booking Page',
    description: 'Display your services and real-time availability online for customers to see.',
  },
  {
    label: 'Step 2',
    title: 'Show your business in its best light',
    description: 'Add your logo, branding, and a stream of customer reviews.',
  },
  {
    label: 'Step 3',
    title: 'Max out your calendar',
    description: 'Link your Booking Page with your site, Facebook, and Instagram.',
  },
]

const DEFAULT_INTEGRATIONS: Integration[] = [
  { name: 'Stripe' },
  { name: 'Zoom' },
  { name: 'Google Calendar' },
  { name: 'Square' },
  { name: 'Instagram' },
  { name: 'Facebook' },
  { name: 'PayPal' },
  { name: 'Slack' },
]

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'PikSlots is a hidden gem. We are so, so happy we found it. It has completely transformed the way we manage appointments.',
    name: 'Laura Gomez',
    role: 'TDC Digital Agency',
  },
  {
    quote:
      'PikSlots has definitely helped us grow, there is no two ways about that. Booking has never been this easy.',
    name: 'Sean Connor',
    role: 'Happy Dental',
  },
  {
    quote:
      'I think it has definitely helped with no-shows. Our calendar stays full and our customers love the reminders.',
    name: 'Athar Khan',
    role: 'Law Offices Of Athar A. Khan',
  },
]

const DEFAULT_PRICING: Plan[] = [
  {
    name: 'Start Free',
    price: 'Rs 0',
    period: 'user / month',
    description: 'For getting started with online scheduling',
    features: [
      { feature: '200 appointments' },
      { feature: 'Accept payments' },
      { feature: 'Branded Booking Page' },
      { feature: 'Email reminders' },
      { feature: 'Email confirmations' },
      { feature: 'iOS and Android apps' },
    ],
    ctaLabel: 'Start FREE',
    ctaLink: '/contact',
    highlighted: false,
  },
  {
    name: 'Get Pro',
    price: '',
    period: '',
    description: 'Tailored plan for growing teams. Contact us to get a quote.',
    features: [
      { feature: 'Unlimited appointments' },
      { feature: 'SMS and email reminders' },
      { feature: 'Recurring appointments' },
      { feature: '2-way calendar sync' },
      { feature: 'Remove PikSlots branding' },
      { feature: '24/7 human support' },
    ],
    ctaLabel: 'Contact us',
    ctaLink: '/contact',
    highlighted: true,
  },
]

const DEFAULT_FAQ: FaqItem[] = [
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

const DEFAULT_CTA: CtaBanner = {
  title: 'Make time for what truly matters',
  subtitle:
    'Join 165,000+ businesses and start booking more appointments today. It takes minutes to get set up.',
  primaryCtaLabel: 'Start FREE',
  primaryCtaLink: '/contact',
}

const featureIcons = [CalendarCheck, Video, CreditCard, BellRing]
const stepIcons = [Globe, Palette, Link2]

const integrationIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  stripe: CreditCard,
  zoom: Video,
  'google calendar': CalendarCheck,
  square: Wallet,
  instagram: Instagram,
  facebook: Facebook,
  paypal: ShieldCheck,
  slack: MessageSquare,
}

const StarRow: React.FC = () => (
  <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="size-4 fill-star text-star" />
    ))}
  </div>
)

const PrimaryButton: React.FC<{ children: React.ReactNode; href?: string }> = ({
  children,
  href = '/',
}) => {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-8 py-4 font-semibold text-white transition-colors hover:bg-brand-hover"
    >
      {children}
      <ArrowRight className="size-4" />
    </a>
  )
}

const SectionHeading: React.FC<{ eyebrow: string; title: string; description?: string }> = ({
  eyebrow,
  title,
  description,
}) => (
  <div className="mx-auto mb-12 max-w-2xl text-center">
    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-blue">
      {eyebrow}
    </p>
    <h2 className="text-3xl font-bold text-ink md:text-4xl">{title}</h2>
    {description && <p className="mt-4 text-lg text-ink-muted">{description}</p>}
  </div>
)

const BookingMockup: React.FC = () => {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const bookings = [
    { name: 'Sarah Johnson', service: 'Consultation', time: '9:00 AM', color: 'bg-brand-light' },
    { name: 'David Lee', service: 'Video call', time: '10:30 AM', color: 'bg-accent-blue' },
    { name: 'Maria Garcia', service: 'Consultation', time: '1:00 PM', color: 'bg-star' },
  ]

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="rounded-2xl border border-border bg-card shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <div>
            <p className="text-xs font-medium text-ink-muted">Appointments today</p>
            <p className="text-2xl font-bold text-brand">12</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-ink">Wed, Aug 15</p>
            <p className="text-xs text-ink-muted">1,650,483 trees planted</p>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1 border-b border-border px-6 py-3 text-center text-[10px] font-medium text-ink-muted">
          {days.map((day, i) => (
            <span key={i} className={`rounded-full py-1 ${i === 2 ? 'bg-brand text-white' : ''}`}>
              {day}
            </span>
          ))}
        </div>
        <div className="space-y-3 p-6">
          {bookings.map((booking) => (
            <div
              key={booking.name}
              className="flex items-center gap-3 rounded-xl border border-border bg-background p-3"
            >
              <span className={`size-10 shrink-0 rounded-full ${booking.color}`} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-ink">{booking.name}</p>
                <p className="text-xs text-ink-muted">{booking.service}</p>
              </div>
              <span className="flex items-center gap-1 text-xs font-medium text-ink">
                <Clock className="size-3.5" />
                {booking.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -left-6 top-1/4 hidden items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-lg md:flex">
        <Check className="size-4 text-brand-light" />
        <span className="text-xs font-medium text-ink">Payment received</span>
      </div>
      <div className="absolute -right-5 -bottom-5 hidden items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-lg md:flex">
        <BellRing className="size-4 text-accent-blue" />
        <span className="text-xs font-medium text-ink">Reminder sent</span>
      </div>
    </div>
  )
}

const Hero: React.FC<{ hero: Hero }> = ({ hero }) => {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-ink-muted">
            <Sparkles className="size-4 text-accent-blue" />
            {hero.badge}
          </p>
          <h1 className="text-4xl font-bold leading-tight text-ink md:text-5xl">{hero.title}</h1>
          <p className="mt-6 text-lg text-ink-muted">{hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PrimaryButton href={hero.primaryCtaLink || '/'}>{hero.primaryCtaLabel}</PrimaryButton>
            <a
              href={hero.secondaryCtaLink || '/posts'}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand px-8 py-4 font-semibold text-brand transition-colors hover:bg-brand/5"
            >
              {hero.secondaryCtaLabel}
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <StarRow />
            <p className="text-sm text-ink-muted">
              Loved by <span className="font-semibold text-ink">165,000+</span> businesses
            </p>
          </div>
        </div>

        <BookingMockup />
      </div>
    </section>
  )
}

const StatsStrip: React.FC<{ stats: Stat[] }> = ({ stats }) => {
  return (
    <section className="border-y border-border bg-surface">
      <div className="container grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-bold text-brand">{stat.value}</p>
            <p className="mt-1 text-sm text-ink-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const Features: React.FC<{ features: Feature[] }> = ({ features }) => {
  return (
    <section className="bg-background py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Spotlight your brand"
          title="Everything you need to run your business"
          description="Brand experience hits a whole new level with a custom Booking Page. Show why your business stands apart and enable people to self-book at their convenience."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = featureIcons[i % featureIcons.length]

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-brand-light/15 text-brand-light">
                  <Icon className="size-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-ink">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const Steps: React.FC<{ steps: Step[] }> = ({ steps }) => {
  return (
    <section className="bg-surface py-20">
      <div className="container">
        <SectionHeading
          eyebrow="3 steps to success"
          title="Go live in minutes, not days"
          description="Set up your online booking system in three simple steps and start filling your calendar."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = stepIcons[i % stepIcons.length]

            return (
              <div
                key={step.label}
                className="relative rounded-2xl border border-border bg-card p-8 text-center"
              >
                <span className="absolute right-6 top-6 text-5xl font-bold text-ink/20">
                  {step.label}
                </span>
                <div className="mx-auto mb-4 inline-flex size-14 items-center justify-center rounded-full bg-brand text-white">
                  <Icon className="size-7" />
                </div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent-blue">
                  {step.label}
                </p>
                <h3 className="mb-2 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const Integrations: React.FC<{ integrations: Integration[] }> = ({ integrations }) => {
  return (
    <section className="bg-background py-20">
      <div className="container">
        <SectionHeading
          eyebrow="It is all about connecting"
          title="Integrate with the tools you already love"
          description="Connect your booking system with your website, social media, sales CRM, and a range of the world most popular apps."
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {integrations.map((integration) => {
            const Icon = integrationIconMap[(integration.name || '').toLowerCase()] || Puzzle

            return (
              <div
                key={integration.name}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:bg-surface"
              >
                <Icon className="size-6 shrink-0 text-ink-muted" />
                <span className="font-medium text-ink">{integration.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const Payments: React.FC = () => {
  const points = [
    'Accept payments online or in person',
    'Choose between Stripe, Square, or PayPal',
    'Tap to Pay and Booking Page payments',
    'Deposits and prepayments in advance',
  ]

  return (
    <section className="bg-surface py-20">
      <div className="container grid items-center gap-12 md:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Payments made simple"
            title="Get paid your way"
            description="Get paid your way online or in person. Choose between Stripe, Square, or PayPal and access features like Tap to Pay and Booking Page payments."
          />
          <ul className="space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-ink">
                <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <Check className="size-4" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto w-full max-w-sm">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-semibold text-ink">Booking summary</p>
              <span className="rounded-full bg-brand-light/15 px-3 py-1 text-xs font-medium text-brand-light">
                Paid
              </span>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-border pb-3">
                <span className="text-ink-muted">Consultation - 45 min</span>
                <span className="font-semibold text-ink">Rs 7,500</span>
              </div>
              <div className="flex justify-between border-b border-border pb-3">
                <span className="text-ink-muted">Card fee</span>
                <span className="text-ink">Rs 250</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-ink">Total</span>
                <span className="font-bold text-brand">Rs 7,750</span>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-brand py-3 font-semibold text-white">
              <CreditCard className="size-4" />
              Payment confirmed
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const BookAnywhere: React.FC = () => {
  return (
    <section className="bg-background py-20">
      <div className="container grid items-center gap-12 md:grid-cols-2">
        <div className="mx-auto order-2 w-full max-w-xs md:order-1">
          <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-xl">
            <div className="mx-auto grid size-36 grid-cols-7 gap-1.5">
              {Array.from({ length: 49 }).map((_, i) => (
                <span
                  key={i}
                  className={`rounded-[3px] ${
                    i === 17 || i === 18 || i === 25 || i === 26 ? 'bg-brand' : 'bg-border'
                  }`}
                />
              ))}
            </div>
            <p className="mt-6 font-semibold text-ink">Scan to book instantly</p>
            <p className="mt-1 text-sm text-ink-muted">Your customers book from any device</p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <SectionHeading
            eyebrow="Book on the go"
            title="Give customers the power to book any time"
            description="Feature your free QR code on marketing, merch, and more. One scan and your Booking Page appears. With all-hours self-booking and easy payments, you fill your calendar faster."
          />
          <div className="text-center md:text-left">
            <PrimaryButton href="/contact">Let us get started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

const Testimonials: React.FC<{ testimonials: Testimonial[] }> = ({ testimonials }) => {
  return (
    <section className="bg-surface py-20">
      <div className="container">
        <SectionHeading eyebrow="People love PikSlots" title="See what our customers say" />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              <StarRow />
              <blockquote className="mt-4 flex-1 text-ink">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-semibold text-ink">{testimonial.name}</p>
                <p className="text-sm text-ink-muted">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

const Pricing: React.FC<{ plans: Plan[] }> = ({ plans }) => {
  return (
    <section className="bg-background py-20">
      <div className="container">
        <SectionHeading
          eyebrow="What is your plan?"
          title="Simple pricing that grows with you"
          description="Start free and upgrade when you are ready. No hidden fees, cancel anytime."
        />
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {plans.map((plan) => {
            const highlighted = Boolean(plan.highlighted)

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  highlighted
                    ? 'border-brand bg-brand text-white shadow-xl'
                    : 'border-border bg-card'
                }`}
              >
                {highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-blue px-4 py-1 text-xs font-semibold text-white">
                    Most popular
                  </span>
                )}
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className={`mt-1 text-sm ${highlighted ? 'text-white/70' : 'text-ink-muted'}`}>
                  {plan.description}
                </p>
                {plan.price ? (
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span
                        className={`text-sm ${highlighted ? 'text-white/70' : 'text-ink-muted'}`}
                      >
                        {plan.period}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="mt-6">
                    <span className="text-2xl font-bold">Contact us</span>
                  </div>
                )}
                <ul className="mt-6 flex-1 space-y-3">
                  {(plan.features || []).map((item) => (
                    <li key={item.feature} className="flex items-center gap-3 text-sm">
                      <Check
                        className={`size-4 shrink-0 ${highlighted ? 'text-white' : 'text-brand'}`}
                      />
                      {item.feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.ctaLink || '/contact'}
                  className={`mt-8 inline-flex items-center justify-center rounded-lg py-3.5 font-semibold transition-colors ${
                    highlighted
                      ? 'bg-white text-brand hover:bg-white/90'
                      : 'bg-brand text-white hover:bg-brand-hover'
                  }`}
                >
                  {plan.ctaLabel}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const FinalCTA: React.FC<{ cta: CtaBanner }> = ({ cta }) => {
  return (
    <section className="bg-background py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-brand px-8 py-16 text-center md:px-16 md:py-20">
          <h2 className="text-3xl font-bold text-white md:text-4xl">{cta.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">{cta.subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={cta.primaryCtaLink || '/contact'}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-brand transition-colors hover:bg-white/90"
            >
              {cta.primaryCtaLabel}
              <ArrowRight className="size-4" />
            </a>
            <a
              href="/posts"
              className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export const HomePage: React.FC = async () => {
  const data = await getCachedGlobal('homepage')()

  const hero: Hero = { ...DEFAULT_HERO, ...(data?.hero || {}) }
  const stats = data?.stats?.length ? data.stats : DEFAULT_STATS
  const features = data?.features?.length ? data.features : DEFAULT_FEATURES
  const steps = data?.steps?.length ? data.steps : DEFAULT_STEPS
  const integrations = data?.integrations?.length ? data.integrations : DEFAULT_INTEGRATIONS
  const testimonials = data?.testimonials?.length ? data.testimonials : DEFAULT_TESTIMONIALS
  const pricing = data?.pricing?.length ? data.pricing : DEFAULT_PRICING
  const faq = data?.faq?.length ? data.faq : DEFAULT_FAQ
  const cta: CtaBanner = { ...DEFAULT_CTA, ...(data?.ctaBanner || {}) }

  return (
    <>
      <Hero hero={hero} />
      <StatsStrip stats={stats} />
      <Features features={features} />
      <Steps steps={steps} />
      <Integrations integrations={integrations} />
      <Payments />
      <BookAnywhere />
      <Testimonials testimonials={testimonials} />
      <Pricing plans={pricing} />
      <section className="bg-surface py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Everything you need to know"
          />
          <FAQ items={faq} />
        </div>
      </section>
      <FinalCTA cta={cta} />
    </>
  )
}
