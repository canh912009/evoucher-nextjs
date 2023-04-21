import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/style.css'  //load bootstrap trước r css sau 
import es6Promise from 'es6-promise'
import fetch from 'isomorphic-fetch'
import cookie from 'cookie'

import type { AppContext, AppProps } from 'next/app'
import Head from 'next/head'
import App from 'next/app'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { useMemo } from 'react'
import { parseJwt } from '@/helpers'

es6Promise.polyfill()

export default function MyApp({ Component, pageProps, router }: AppProps) {
    const pathName = router.pathname;

    const hideFooter: boolean = useMemo(() => {
        const exclude = ['/', '/posts/[post_id]'];
        // console.log("router.pathname", router.pathname);

        return exclude.indexOf(pathName) !== -1;

    }, [router]);

    const hideHeader: boolean = useMemo(() => {
        // console.log("router change", router);

        const exclude = ['/register', '/login'];
        const currentRouter = pathName

        return exclude.indexOf(currentRouter) !== -1;

    }, [pathName]);

    return (
        <div id='root'>
            <Head>
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, minimum-scale=1, maximum-scale=1" />
                <meta name="keywords" content="HTML5 Template" />
                <meta name="description" content="Cộng đồng chế ảnh ZendVN" />
                <meta name="author" content="etheme.com" />
                <title>Cộng đồng chế ảnh ZendVN</title>
                <link rel="icon" href="/favicon.ico" />

                <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" />
                <link rel="stylesheet" href="/fonts/font-awesome/css/font-awesome.css" />
                <link rel="stylesheet" href="/fonts/emotion/style.css" />
                {/* <link href="css/style.css" rel="stylesheet" /> bỏ comment này thì nó sẽ load trước bootstrap gây vỡ giao diện --> import ở dòng 2 */}

                {/* JAVA SCRIPT */}
                {/* require */}
                {/*  */}
                {/* HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries */}
                {/*[if lt IE 9]>
	      <![endif]*/}
            </Head>

            {!hideHeader && <Header />}

            <main>
                <Component {...pageProps} />
            </main>

            {!hideFooter && <Footer />}
        </div>
    )
}

// appContext khác với các Pages context
MyApp.getInitialProps = async (appContext: AppContext) => {
    const appProps = await App.getInitialProps(appContext);

    const req = appContext.ctx.req
    if (req) {
        const token = cookie.parse(req.headers.cookie as string).token;
        const userToken = parseJwt(token);

        console.log("4. App run in getInitialProps");
        console.log("5. Got Header(token) : ", userToken);
    }

    return {
        pageProps: {
            ...appProps.pageProps,
        }
    }
}
