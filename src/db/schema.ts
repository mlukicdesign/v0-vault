import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';


import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';

export const Passwords = pgTable('credential_table', {
  id: serial('id').primaryKey(),
  website: text('website').notNull(),
  username: text('username').notNull(),
  password: text('password').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
});