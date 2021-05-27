import Head from 'next/head';
import { AppProps } from "next/dist/next-server/lib/router/router";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
    <Head>
      <title>MyTop</title>
      <link  href="/favicon.ico"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700&display=swap" rel="stylesheet"/>
    </Head>
    <Component {...pageProps} />
    </>
  
  );}


export default MyApp;
