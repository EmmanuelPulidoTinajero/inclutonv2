import * as React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import useIsBrowser from "@docusaurus/core/lib/client/exports/useIsBrowser";
import { Toaster as Sonner } from 'sonner';

type ColorMode = 'light' | 'dark' | 'system';
type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const isBrowser = useIsBrowser();

  let theme: ColorMode = 'system';

  if (isBrowser) {
    const { colorMode: browserColorMode } = useColorMode();
    theme = browserColorMode;
  } else {
    return null;
  }

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };