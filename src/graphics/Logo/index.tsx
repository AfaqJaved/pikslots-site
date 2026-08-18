import React from 'react'

export const Logo: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="8" fill="#3B21B6" />
        <path
          d="M8 10h4l4 6-4 6H8l4-6-4-6z"
          fill="white"
        />
        <path
          d="M16 10h4l4 6-4 6h-4l4-6-4-6z"
          fill="white"
          opacity="0.6"
        />
      </svg>
      <span
        style={{
          fontSize: '20px',
          fontWeight: 700,
          color: '#3B21B6',
          letterSpacing: '-0.02em',
        }}
      >
        PikSlots
      </span>
    </div>
  )
}
