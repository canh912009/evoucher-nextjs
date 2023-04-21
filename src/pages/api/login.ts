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

    console.log("1. API/Login run , data =", req.body);
    try {
        const resBackendZend = await api.callJson("/member/login.php", req.body, method)
        const currentTime = new Date();
        const nextYear = new Date(currentTime.getFullYear(), currentTime.getMonth() + 6);

        console.log("2. Response from Zend: ", resBackendZend);
        if (resBackendZend.status === 200) {
            console.log("3. Send Location by Header --> Redirect");
            res.setHeader('Location', `/`)
            res.setHeader('Set-Cookie', `token=${resBackendZend.token}; expires=${nextYear.toUTCString()}; Path=/`)
        } else {
            res.statusCode = 302
            res.setHeader('Location', '/login?error=LoginFailed')
        }

        // này để kết thúc 1 requestss
        res.json(resBackendZend)

    } catch (error: any) {
        console.log("loginTS  catch (error: any)");
        res.statusCode = 200
        res.json({
            status: 500,
            message: "Internal Server Error" //error.message
        })

    }


}
