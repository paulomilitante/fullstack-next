'use client'

import type { Card } from '../hooks/useCards'
import { CardItem } from './CardItem'

export function CardGrid({
  cards,
  onCardClick
}: { cards: Card[]; onCardClick: (id: number) => void }) {
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
      {cards.map(c => (
        <CardItem key={c.id} card={c} onClick={onCardClick} />
      ))}
    </div>
  )
}