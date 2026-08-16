'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

const PageClient: React.FC<{ heroType?: string | null }> = ({ heroType }) => {
  /* Only force a dark header when a full-bleed image sits behind it */
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme(heroType === 'highImpact' ? 'dark' : null)
  }, [heroType, setHeaderTheme])
  return <React.Fragment />
}

export default PageClient
