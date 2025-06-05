import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import { useColorMode } from '@docusaurus/theme-common';
import useIsBrowser from "@docusaurus/core/lib/client/exports/useIsBrowser";
// Si ColorMode no se importa automáticamente, puedes necesitar importarlo explícitamente:
// import type { ColorMode } from '@docusaurus/theme-common'; // o donde esté definido

export function ThemeToggle() {
    const isBrowser = useIsBrowser();

    // Define explícitamente el tipo de setColorMode para que TypeScript sepa que espera un argumento
    // Puedes usar la forma de Type Alias o directamente en la declaración si es más simple.
    // Docusaurus tipa useColorMode() así: { colorMode: ColorMode; setColorMode: (newColorMode: ColorMode) => void; }
    let colorMode: 'light' | 'dark' = 'light'; // O el tipo ColorMode si lo importaste
    let setColorMode: (newColorMode: 'light' | 'dark') => void = () => {};

    if (isBrowser) {
        const { colorMode: browserColorMode, setColorMode: browserSetColorMode } = useColorMode();
        colorMode = browserColorMode;
        setColorMode = browserSetColorMode;
    } else {
        return null;
    }

    const isDarkTheme = colorMode === 'dark';

    return (
        <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full transition-colors">
            <Switch
                id="theme-mode"
                checked={isDarkTheme}
                // Aquí el 'checked' ya es de tipo boolean gracias a la librería de la Switch
                onCheckedChange={(checked) => setColorMode(checked ? 'dark' : 'light')}
                className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-orange-500"
                aria-label="Alternar modo oscuro"
            />
            <Label
                htmlFor="theme-mode"
                className="flex items-center text-sm font-medium cursor-pointer select-none text-gray-800 dark:text-white"
            >
                {isDarkTheme ? (
                    <Moon className="h-5 w-5 mr-2 text-blue-600" />
                ) : (
                    <Sun className="h-5 w-5 mr-2 text-orange-500" />
                )}
                {isDarkTheme ? 'Modo oscuro' : 'Modo claro'}
            </Label>
        </div>
    );
}