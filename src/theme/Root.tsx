import React from 'react';
import { Toaster } from '../components/ui/sonner';

export default function Root({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}