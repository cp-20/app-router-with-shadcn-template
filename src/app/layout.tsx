import 'ress';
import '@/app/globals.css';
import type { Metadata } from 'next';
import type { FC, ReactNode } from 'react';
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

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <html lang="ja">
        <body>
          <GoogleTagManager />

          {children}
        </body>
      </html>
    </>
  );
};

export default RootLayout;
