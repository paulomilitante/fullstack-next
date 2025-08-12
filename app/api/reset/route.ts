import { NextResponse } from 'next/server'
import { db } from '@/db/client'
import { cards } from '@/db/schema'
import { asc } from 'drizzle-orm'

export async function POST() {
  await db.update(cards).set({ clickCount: 0, firstClickTs: null })
  const rows = await db.select().from(cards).orderBy(asc(cards.id))

  return NextResponse.json(
    rows.map(r => ({
      id: r.id,
      clickCount: r.clickCount,
      firstClickAt: r.firstClickTs ?? null
    }))
  )
}