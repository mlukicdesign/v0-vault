import { insertCredentials } from '@/db/schema';
import { createCredentials } from '@/db/uploadData';

async function main() {
    const newCredentials: insertCredentials = {
        website: 'test-website',
        username: 'test@email.com',
        password: '123456',
    };
    const res = await createCredentials(newCredentials);
    console.log('seeding successful', res);
    process.exit();
}

main();