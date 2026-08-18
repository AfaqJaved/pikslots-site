import React from 'react'

import type { TeamBlock as TeamBlockProps } from '@/payload-types'
import type { Team } from '@/payload-types'

export const TeamBlock: React.FC<TeamBlockProps> = ({ heading, intro, members }) => {
  const resolvedMembers = (members || []).filter(
    (m): m is Team => typeof m === 'object' && m !== null && 'name' in m,
  )

  return (
    <section className="container">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-ink md:text-4xl">{heading || 'Meet the team'}</h2>
        {intro && <p className="mt-4 text-lg text-ink-muted">{intro}</p>}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {resolvedMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center"
          >
            {member.image && typeof member.image === 'object' && member.image.url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={member.image.url}
                alt={member.name}
                className="mb-4 size-24 rounded-full border border-border object-cover"
              />
            ) : (
              <div className="mb-4 flex size-24 items-center justify-center rounded-full bg-brand-light/15 text-3xl font-bold text-brand-light">
                {member.name?.charAt(0)}
              </div>
            )}
            <h3 className="text-lg font-semibold text-ink">{member.name}</h3>
            <p className="text-sm font-medium text-accent-blue">{member.role}</p>
            {member.description && (
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{member.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
