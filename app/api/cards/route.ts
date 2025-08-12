import { NextResponse } from 'next/server'
import { db } from '@/db/client'
import { cards } from '@/db/schema'
import { asc, sql } from 'drizzle-orm'

export async function GET() {
  const rows = await db
    .select()
    .from(cards)
    .orderBy(sql`first_click_ts NULLS LAST`, asc(cards.id))

  return NextResponse.json(
    rows.map(r => ({
      id: r.id,
      clickCount: r.clickCount,
      firstClickAt: r.firstClickTs ?? null
    }))
  )
}