import { GeistProvider, CssBaseline } from "@geist-ui/react";
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GeistProvider theme={{ type: "dark" }}>
        <CssBaseline />
        <Component {...pageProps} />
      </GeistProvider>
    </>
  );
}

export default MyApp;