import React, { createContext, useContext, ReactNode } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import useIsBrowser from "@docusaurus/core/lib/client/exports/useIsBrowser";

export const theme = {
  colors: {
    primary: {
      gradient: {
        start: "#FF6B2B",
        end: "#2B7BFF"
      }
    },
    brand: {
      orange: "#FF6B2B",
      blue: "#2B7BFF",
      green: "#4CAF50",
      yellow: "#FFD700",
      purple: "#9C27B0",
      teal: "#00BCD4",
      categories: {
        visual: "#FF6B2B",
        auditiva: "#2B7BFF",
        motriz: "#4CAF50",
        cognitiva: "#FFD700",
        multiple: "#9C27B0"
      }
    },
    sponsors: {
      tierra: "#4CAF50",
      agua: "#2196F3",
      fuego: "#FF5722",
      aire: "#03A9F4",
      eter: "#9C27B0"
    }
  },
  fonts: {
    heading: "var(--font-inter)",
    body: "var(--font-poppins)"
  },
  breakpoints: {
    mobile: "320px",
    tablet: "768px",
    desktop: "1024px",
    wide: "1440px"
  }
} as const;

type ThemeContextType = typeof theme & {
  isDark: boolean;
  colorMode: 'light' | 'dark' | undefined; // 'undefined' for SSR
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  const isBrowser = useIsBrowser();

  let colorMode: 'light' | 'dark' | undefined = undefined;
  let isDark = false;

  if (isBrowser) {
    const { colorMode: docusaurusColorMode } = useColorMode();
    colorMode = docusaurusColorMode;
    isDark = docusaurusColorMode === 'dark';
  }

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return {
    ...context,
    isDark,
    colorMode,
  };
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeContext.Provider value={theme as ThemeContextType}>
      {children}
    </ThemeContext.Provider>
  );
}