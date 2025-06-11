// Theme context for INCLUTON 2025
import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

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
        multiple: "#9C27B0"  // Púrpura para múltiple
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

export const ThemeContext = createContext(theme);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light'); // Inicializa con un valor por defecto seguro

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  // Utiliza useEffect para acceder a localStorage y document solo en el cliente
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (storedTheme) {
      setColorMode(storedTheme);
      document.documentElement.setAttribute('data-theme', storedTheme);
      if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // Opcional: Si no hay tema guardado, puedes establecer un valor inicial basado en la preferencia del sistema
      // if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      //   setColorMode('dark');
      //   document.documentElement.setAttribute('data-theme', 'dark');
      //   document.documentElement.classList.add('dark');
      // }
    }
  }, []); // El array vacío asegura que esto se ejecute solo una vez al montar el componente

  const setAppColorMode = (mode: 'light' | 'dark') => {
    setColorMode(mode);
    localStorage.setItem('theme', mode);
    document.documentElement.setAttribute('data-theme', mode);
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return {
    ...context,
    isDark: colorMode === 'dark',
    colorMode,
    setColorMode: setAppColorMode
  };
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}