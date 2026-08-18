'use client'

import React, { useEffect, useState } from 'react'

function hexToHSL(hex: string): { h: number; s: number; l: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return { h: 0, s: 0, l: 0 }

  const r = parseInt(result[1], 16) / 255
  const g = parseInt(result[2], 16) / 255
  const b = parseInt(result[3], 16) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const l = (max + min) / 2

  if (max === min) return { h: 0, s: 0, l }

  const d = max - min
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

  let h = 0
  switch (max) {
    case r:
      h = ((g - b) / d + (g < b ? 6 : 0)) / 6
      break
    case g:
      h = ((b - r) / d + 2) / 6
      break
    case b:
      h = ((r - g) / d + 4) / 6
      break
  }

  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) }
}

function generateBrandVariants(hex: string) {
  const { h, s, l } = hexToHSL(hex)
  const hover = `hsl(${h}, ${s}%, ${Math.max(l - 10, 0)}%)`
  const light = `hsl(${h}, ${Math.min(s + 15, 100)}%, ${Math.min(l + 25, 95)}%)`
  return { base: hex, hover, light }
}

export function PrimaryColorProvider({
  color,
  children,
}: {
  color: string
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const variants = generateBrandVariants(color)
    const root = document.documentElement

    root.style.setProperty('--brand', variants.base)
    root.style.setProperty('--brand-hover', variants.hover)
    root.style.setProperty('--brand-light', variants.light)
  }, [color, mounted])

  return <>{children}</>
}
