import 'ress';
import '@/shared/styles/global.css';
import type { AppProps } from 'next/app';
import { GoogleTagManagerBody } from '@/shared/components/GoogleTagManager';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleTagManagerBody />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
