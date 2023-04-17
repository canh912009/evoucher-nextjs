import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/style.css'  //load bootstrap trước r css sau 

import type { AppContext, AppProps } from 'next/app'
import Head from 'next/head'

import { Header } from './components/Header'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <div id='root'>
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
      <link rel="stylesheet" href="fonts/font-awesome/css/font-awesome.css" />
      <link rel="stylesheet" href="fonts/emotion/style.css" />
      {/* <link href="css/style.css" rel="stylesheet" /> bỏ comment này thì nó sẽ load trước bootstrap gây vỡ giao diện --> import ở dòng 2 */}

      {/* JAVA SCRIPT */}
      {/* require */}
      {/*  */}
      {/* HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries */}
      {/*[if lt IE 9]>
	      <![endif]*/}
    </Head>
    <Header />
    <Component {...pageProps} />
  </div>
}
