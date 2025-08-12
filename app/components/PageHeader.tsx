'use client'

import { SortSelect } from './SortSelect'
import { ClearButton } from './ClearButton'
import type { SortOption } from '../hooks/useSortCards'

export function PageHeader({
  sort,
  setSort,
  onClear,
  loading,
}: {
  sort: SortOption
  setSort: (v: SortOption) => void
  onClear: () => void
  loading: boolean
}) {
  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
      <h1 className="text-2xl font-semibold">Click Cards</h1>
      <div className="flex gap-3">
        <SortSelect value={sort} onChange={setSort} />
        <ClearButton onClick={onClear} loading={loading} />
      </div>
    </header>
  )
}