import { useEffect } from 'react'
import { parseJwt } from '.'
import { useGlobalState } from '@/state'
import { useRouter } from 'next/router'

const useAuthen = () => {
    const [token] = useGlobalState("token")
    const router = useRouter()

    useEffect(() => {
        const userToken = parseJwt(token as string)
        console.log("\x1b[36m--- token ---", userToken);

        if (!(userToken && userToken.id && userToken.email)) {
            // chua dang nhap
            router.push('/login')
        }
    }, [token])
}

const useNotAuthen = () => {
    const [token] = useGlobalState("token")
    const router = useRouter()

    useEffect(() => {
        const userToken = parseJwt(token as string)
        console.log("\x1b[36m--- token ---", userToken);

        if (userToken && userToken.id && userToken.email) {
            // chua dang nhap
            router.push('/')
        }
    }, [token])
}

export {
    useAuthen,
    useNotAuthen
}


