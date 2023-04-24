import atob from 'atob'
import { NextPageContext } from 'next';
import Cookies from 'js-cookie'
import cookie from 'cookie'

type UserToken = {
    id: string;
    email: string
}

export const parseJwt = (token: string) => {
    try {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);

    } catch (error) {
        console.log("parseJwt : ", error);
        return null
    }
}

export const getTokenSSR_CSR = (ctx: NextPageContext): [string, UserToken | null] => {
    let token = ''
    let userToken = null
    if (typeof window === "undefined") { //server side SSR, run only once
        const req = ctx.req
        if (req && req.headers.cookie) {
            // CHỈ PHÍA SERVER MỚI CÓ : req.headers.cookie
            token = cookie.parse(req.headers.cookie as string).token;
            userToken = parseJwt(token);
        }
    } else { //CSR
        token = Cookies.get('token') as string || ''
    }

    return [token, userToken]
}