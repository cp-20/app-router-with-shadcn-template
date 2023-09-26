import 'ress';
import '@/shared/styles/global.css';
import type { Metadata } from 'next';
import type { AppProps } from 'next/app';
import { GoogleTagManager } from '@/shared/components/GoogleTagManager';

export const appBaseUrl = 'https://dicespec.vercel.app';

export const metadata: Metadata = {
  title: {
    template: '%s - ダイススペック',
    default: 'ダイススペック',
  },
  openGraph: {
    type: 'website',
    locale: 'ja',
    images: `${appBaseUrl}/ogp.png`,
  },
  manifest: '/manifest.webmanifest',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
      sizes: 'any',
    },
    {
      rel: 'icon',
      url: '/icon.svg',
      type: 'image/svg+xml',
    },
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
  ],
  twitter: {
    card: 'summary_large_image',
    site: '@__cp20__',
    images: `${appBaseUrl}/ogp.png`,
  },
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <html lang="ja">
        <body>
          <GoogleTagManager />

          <Component {...pageProps} />
        </body>
      </html>
    </>
  );
};

export default MyApp;
