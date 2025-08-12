'use client'

import type { Card } from './useCards'

export function useClickCard(setCards: React.Dispatch<React.SetStateAction<Card[]>>) {
  const clickCard = async (id: number) => {
    const now = new Date().toISOString()
    setCards(prev => prev.map(c =>
      c.id === id ? { ...c, clickCount: c.clickCount + 1, firstClickAt: c.firstClickAt ?? now } : c
    ))
    try {
      const r = await fetch(`/api/cards/${id}/click`, { method: 'POST' })
      if (!r.ok) throw new Error()
      const updated: Card = await r.json()
      setCards(prev => prev.map(c => (c.id === id ? {
        ...c,
        clickCount: Math.max(c.clickCount, updated.clickCount),
        firstClickAt: c.firstClickAt && updated.firstClickAt
          ? (c.firstClickAt < updated.firstClickAt ? c.firstClickAt : updated.firstClickAt)
          : (c.firstClickAt ?? updated.firstClickAt ?? null)
      } : c)))
    } catch {
      const r = await fetch('/api/cards', { cache: 'no-store' })
      setCards(await r.json())
    }
  }
  return { clickCard }
}