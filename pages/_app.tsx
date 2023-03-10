import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Router from 'next/router';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      NProgress.start();
    });

    Router.events.on('routeChangeComplete', () => {
      NProgress.done(false);
    });

    Router.events.on('routeChangeError', () => {
      NProgress.done(false);
    });
  }, []);

  return (
    <ChakraProvider>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
