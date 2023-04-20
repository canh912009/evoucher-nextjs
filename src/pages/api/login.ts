import { Cookies } from 'js-cookie';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import api from '@/services/api'

// type Data = {
//   name: string
// }

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const method = req.method

    if (method !== 'POST') {
        res.statusCode = 200
        res.json({
            status: 500,
            message: "Method not allowed"
        })
    }

    console.log("data Cookies ====", req.headers.cookie);

    try {
        const data = req.body
        const resBackend = await api.callJson("/member/login.php", req.body, method)

        console.log("resBackend", resBackend);

        const currentTime = new Date();
        const nextYear = new Date(currentTime.getFullYear(), currentTime.getMonth() + 6);

        res.setHeader('Set-Cookie', `token=${resBackend.token}; expires=${nextYear.toUTCString()}`)
        res.statusCode = 200
        res.json(resBackend)

    } catch (error: any) {
        res.statusCode = 200
        res.json({
            status: 500,
            message: "Internal Server Error" //error.message
        })

    }


}