import { NextResponse } from 'next/server'
import { pool } from '@/lib/db'

type Row = { id: number; text: string }

export async function GET() {
  const { rows } = await pool.query<Row>('SELECT id, text FROM messages ORDER BY id ASC')
  return NextResponse.json(rows)
}
