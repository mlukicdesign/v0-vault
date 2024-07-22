import { db } from '@/db';
import { credentialsTable, insertCredentials } from '@/db/schema';

export async function createCredentials(data: insertCredentials) {
    await db.insert(credentialsTable).values(data);
}

