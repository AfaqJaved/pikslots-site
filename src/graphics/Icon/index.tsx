import React from 'react'

export const Icon: React.FC = () => {
  return (
    <svg
      width="24"
      height="24"
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
  )
}
