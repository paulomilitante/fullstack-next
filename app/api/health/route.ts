import { NextResponse } from 'next/server'
import { pool } from '@/lib/db'

export async function GET() {
  const { rows } = await pool.query('SELECT 1 as ok')
  return NextResponse.json({ ok: rows[0]?.ok === 1 })
}