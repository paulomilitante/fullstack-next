'use client'

import { useCards } from './hooks/useCards'
import { useClickCard } from './hooks/useClickCard'
import { useResetCards } from './hooks/useResetCards'
import { useSortCards } from './hooks/useSortCards'
import { PageHeader } from './components/PageHeader'
import { CardGrid } from './components/CardGrid'

export default function Page() {
  const { cards, setCards, loading, error } = useCards()
  const { sorted, sort, setSort } = useSortCards(cards)
  const { clickCard } = useClickCard(setCards)
  const { resetCards, loading: resetting } = useResetCards(setCards)

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <PageHeader sort={sort} setSort={setSort} onClear={resetCards} loading={resetting} />

        {error && <p className="mb-2 text-red-600">{error}</p>}
        {loading || resetting ? (
          <p className='animate-pulse text-center my-8'>Loading…</p>
        ) : (
          <CardGrid cards={sorted} onCardClick={clickCard} />
        )}
      </div>
    </main>
  )
}