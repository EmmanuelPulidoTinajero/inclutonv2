import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import { useColorMode } from '@docusaurus/theme-common';
import useIsBrowser from "@docusaurus/core/lib/client/exports/useIsBrowser";

export function ThemeToggle() {
    const isBrowser = useIsBrowser();
    const { colorMode, setColorMode } = useColorMode();

    if (!isBrowser) {
        return null;
    }

    const isDarkTheme = colorMode === 'dark';

    return (
        <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full transition-colors">
            <Switch
                id="theme-mode"
                checked={isDarkTheme}
                onCheckedChange={(checked: boolean) => setColorMode(checked ? 'dark' : 'light')}
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