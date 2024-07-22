import { db } from '@/db';
import { credentialsTable, insertCredentials } from '@/db/schema';
import bcrypt from 'bcrypt';

export async function createCredentials(data: insertCredentials) {

    const hashedPassword = await bcrypt.hash(data.password, 10);

    await db.insert(credentialsTable).values({
        ...data,
        password: hashedPassword,
});
}

