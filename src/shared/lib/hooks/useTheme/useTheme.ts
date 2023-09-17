'use client'

import { useContext } from "react";

import { Theme } from "@/shared/const/theme";

import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

export const useTheme = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT

        setTheme?.(newTheme)
    }
    
    return {
        theme,
        toggleTheme
    }
}