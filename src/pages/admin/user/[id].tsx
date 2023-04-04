import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link';

export default function UserId() {
    const router = useRouter();

    console.log("router", router.query.id)

    function handleOnClick(): void {
        router.push('/')
    }

    return (
        <>
            <Head>
                <title>Hello user title</title>
                {/* <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,500&display=swap" rel="stylesheet"></link> */}
            </Head>
            <div>Hello user ID  : {router.query.id}</div>
            <button onClick={handleOnClick}>Go to Homepage</button>

            <Link href="/" className='active'>
                Link home
                <button onClick={handleOnClick}>Link home</button>
            </Link>
        </>
    )
}
