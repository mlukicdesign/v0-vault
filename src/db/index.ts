import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { config } from 'dotenv';
import '@/db/envConfig';

config({ path: '.env.local' });

export const db = drizzle(sql);
