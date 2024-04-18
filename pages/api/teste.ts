import type { NextApiRequest, NextApiResponse } from 'next'
import { sql } from '@vercel/postgres';

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    const result =await sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
    res.status(200).json({ message: 'Hello from Next.js!' })
}