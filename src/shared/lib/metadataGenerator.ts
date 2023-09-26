import type { Metadata } from 'next';

export type Option = {
  title: string;
  description: string;
  ogp?: string;
};

export const metadataGenerator = ({
  title,
  description,
  ogp,
}: Option): Metadata => {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: title,
      images: ogp,
    },
    twitter: {
      title,
      description,
      images: ogp,
    },
  };
};
