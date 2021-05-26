import Head from 'next/head'
import { AppProps } from "next/dist/next-server/lib/router/router";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
    <Head>
      <title>MyTop</title>
      <link key={1} rel="icon" href="/favicon.ico"/>
    </Head>
    <Component {...pageProps} />;
    </>
  
  )}


export default MyApp;