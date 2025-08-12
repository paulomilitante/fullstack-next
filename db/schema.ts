import { pgTable, integer, timestamp } from 'drizzle-orm/pg-core'

export const cards = pgTable('cards', {
  id: integer('id').primaryKey(),
  clickCount: integer('click_count').notNull().default(0),
  firstClickTs: timestamp('first_click_ts', { withTimezone: true, nullable: true })
})