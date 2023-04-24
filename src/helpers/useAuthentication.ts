import { useEffect } from 'react'
import Cookies from 'js-cookie'
import { parseJwt } from '.'
import { useRouter } from 'next/router'

const useAuthentication = () => {
    const token = Cookies.get('token')
    const router = useRouter()

    if (token) {
        useEffect(() => {
            const userToken = parseJwt(token as string)
            console.log("\x1b[36m--- token ---", userToken);

            if (userToken && userToken.id && userToken.email) {
                // chua dang nhap
                router.push('/')
            }
        }, [token])
    }

}

export default useAuthentication