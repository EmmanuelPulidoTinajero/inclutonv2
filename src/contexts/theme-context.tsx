// Theme context for INCLUTON 2025
import React, { createContext, useContext, ReactNode } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export const theme = {
  colors: {
    primary: {
      gradient: {
        start: "#FF6B2B",  // Naranja vibrante
        end: "#2B7BFF"     // Azul brillante
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
        visual: "#FF6B2B",    // Naranja para accesibilidad visual
        auditiva: "#2B7BFF",  // Azul para accesibilidad auditiva
        motriz: "#4CAF50",    // Verde para accesibilidad motriz
        cognitiva: "#FFD700", // Amarillo para accesibilidad cognitiva
        multiple: "#9C27B0"   // Púrpura para múltiple
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

const ThemeContext = createContext(theme);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  const { colorMode } = useColorMode();
  
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return {
    ...context,
    isDark: colorMode === 'dark',
    colorMode,
  };
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}