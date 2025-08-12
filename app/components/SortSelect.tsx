'use client'

import { SortOption } from '../hooks/useSortCards'

export function SortSelect({
  value,
  onChange
}: { value: SortOption; onChange: (v: SortOption) => void }) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value as SortOption)}
      className="rounded border px-3 py-2 bg-white"
      aria-label="Sort cards"
    >
      <option value="most">Most clicks → Fewest</option>
      <option value="fewest">Fewest clicks → Most</option>
      <option value="first">First clicked → Last clicked</option>
      <option value="last">Last clicked → First clicked</option>
      <option value="original">Original order</option>
    </select>
  )
}