import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'

declare global {
  var _pool: Pool | undefined
  var _db: ReturnType<typeof drizzle> | undefined
}

const pool =
  global._pool ??
  new Pool({ connectionString: process.env.DATABASE_URL })

if (process.env.NODE_ENV !== 'production') global._pool = pool

export const db =
  global._db ?? drizzle(pool)

if (process.env.NODE_ENV !== 'production') global._db = db