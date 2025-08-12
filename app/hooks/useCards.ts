'use client'

import { useEffect, useState } from 'react'

export type Card = {
  id: number
  clickCount: number
  firstClickAt: string | null
}

export function useCards() {
  const [cards, setCards] = useState<Card[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const refetch = async () => {
    setError(null)
    try {
      const r = await fetch('/api/cards', { cache: 'no-store' })
      if (!r.ok) throw new Error('Failed to fetch cards')
      setCards(await r.json())
    } catch (e: Error) {
      if (e instanceof Error) {
        setError(e.message)
      } else {
        setError('Failed to fetch')
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { refetch() }, [])

  return { cards, setCards, loading, error, refetch }
}