import { NextResponse } from 'next/server'
import { db } from '@/db/client'
import { cards } from '@/db/schema'
import { eq, sql } from 'drizzle-orm'

export async function POST(_req: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  if (!Number.isInteger(id) || id < 1 || id > 8) {
    return NextResponse.json({ error: 'Invalid id' }, { status: 400 })
  }

  const [row] = await db
    .update(cards)
    .set({
      clickCount: sql`${cards.clickCount} + 1`,
      firstClickTs: sql`COALESCE(${cards.firstClickTs}, NOW())`
    })
    .where(eq(cards.id, id))
    .returning()

  if (!row) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  return NextResponse.json({
    id: row.id,
    clickCount: row.clickCount,
    firstClickAt: row.firstClickTs ?? null
  })
}