import type { NextApiRequest, NextApiResponse } from 'next'
import { sql } from '@vercel/postgres';

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    try{
        const body = req.body;

        const entrada = await sql`INSERT INTO entradas(user_id, valor, data, descricao) VALUES (
            '${body.user_id}',
            '${body.valor}',
            '${body.data}',
            '${body.descricao}'
        )`;

        res.status(200).send(entrada)
    }catch(e){
        res.status(500).send(e)
    }
}