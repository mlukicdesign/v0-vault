import { NextResponse } from 'next/server';
import { createCredentials } from '@/db/uploadData'; // Path to your server-side function

// POST /api/credentials
// Create a post request utilising Drizzle to create a new entry in the database.
export async function POST(request: Request) {
  const data = await request.json();

  try {
    await createCredentials(data);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}