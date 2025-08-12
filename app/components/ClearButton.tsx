'use client'

export function ClearButton({ onClick, loading }: { onClick: () => void, loading: boolean }) {
  return (
    <button
      onClick={onClick}
      className="rounded bg-gray-900 text-white px-4 py-2 hover:opacity-90 disabled:opacity-50 transition-opacity"
      disabled={loading}
    >
      Clear
    </button>
  )
}