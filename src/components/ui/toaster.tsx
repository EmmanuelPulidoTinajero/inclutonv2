import * as React from 'react';
import { Toaster } from './sonner';

interface ToastProps {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
}

export function ToasterProvider() {
  return <Toaster />;
}

export { type ToastProps };
