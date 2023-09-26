import type { FC, ReactNode } from 'react';

export const Text: FC<{ children: ReactNode }> = ({ children }) => {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
};
