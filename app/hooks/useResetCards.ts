'use client'

import { useState } from 'react'
import type { Card } from './useCards'

export function useResetCards(setCards: React.Dispatch<React.SetStateAction<Card[]>>) {
  const [loading, setLoading] = useState(false)
  const resetCards = async () => {
    setLoading(true)
    const r = await fetch('/api/reset', { method: 'POST' })
    if (!r.ok) throw new Error('Failed to reset')
    const fresh: Card[] = await r.json()
    setCards(fresh)
    setLoading(false)
  }
  return { resetCards, loading }
}