import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { className } = props

  return (
    <div className={clsx('flex items-center gap-2', className)}>
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#3B21B6" />
        <text x="16" y="23" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" fill="white">P</text>
      </svg>
      <span className="text-lg font-bold tracking-tight">PikSlots</span>
    </div>
  )
}
