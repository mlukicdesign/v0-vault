import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/db";
import { credentialsTable } from "@/db/schema";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const credentials = await db.select().from(credentialsTable);
    res.status(200).json(credentials);
  } catch (error) {
    console.error("Error fetching credentials:", error);
    res.status(500).json({ message: "Internal Server Error" });
    res.status(404).json({ message: error });
  }
}
