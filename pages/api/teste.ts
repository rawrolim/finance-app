import type { NextApiRequest, NextApiResponse } from 'next'
import { sql } from '@vercel/postgres';

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    res.status(200).json({ message: 'Hello from Next.js!' })
}