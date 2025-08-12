'use client'

import { useMemo, useState } from 'react'
import type { Card } from './useCards'

export type SortOption = 'original' | 'first' | 'last' | 'most' | 'fewest'

export function useSortCards(cards: Card[]) {
  const [sort, setSort] = useState<SortOption>('original')

  const sorted = useMemo(() => {
    const arr = [...cards]
    switch (sort) {
      case 'original': return arr
      case 'first':
        return arr.sort((a, b) => {
          if (a.firstClickAt && b.firstClickAt) return a.firstClickAt.localeCompare(b.firstClickAt)
          if (a.firstClickAt) return -1
          if (b.firstClickAt) return 1
          return a.id - b.id
        })
      case 'last':
        return arr.sort((a, b) => {
          if (a.firstClickAt && b.firstClickAt) return b.firstClickAt.localeCompare(a.firstClickAt)
          if (a.firstClickAt) return 1
          if (b.firstClickAt) return -1
          return a.id - b.id
        })
      case 'most':   return arr.sort((a, b) => b.clickCount - a.clickCount || a.id - b.id)
      case 'fewest': return arr.sort((a, b) => a.clickCount - b.clickCount || a.id - b.id)
      default:       return arr
    }
  }, [cards, sort])

  return { sorted, sort, setSort }
}