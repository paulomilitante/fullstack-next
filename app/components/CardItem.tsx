'use client'

import type { Card } from '../hooks/useCards'

const fmt = (iso: string | null) => (iso ? new Date(iso).toLocaleString() : '--')

export function CardItem({ card, onClick }: { card: Card; onClick: (id: number) => void }) {
  return (
    <button
      onClick={() => onClick(card.id)}
      className="aspect-square rounded-xl bg-white shadow hover:shadow-md transition-shadow flex flex-col items-center justify-center gap-2 p-4"
    >
      <div className="text-3xl font-bold">{card.id}</div>
      <div className="text-sm">
        Clicks: <span className="font-medium">{card.clickCount}</span>
      </div>
      <div className="text-xs text-gray-500">First click: {fmt(card.firstClickAt)}</div>
    </button>
  )
}