import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, ThemeContext} from "./ThemeContext";
import {ETheme} from "./theme.types";

export interface IUseThemeResult {
    toggleTheme: () => void;
    theme: ETheme;
}

export function useTheme(): IUseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);
    const toggleTheme: () => void = () => {
        if (theme && setTheme) {
            const newTheme = theme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT;
            setTheme(newTheme);
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        }
    }

    return {
        theme: theme ?? ETheme.LIGHT,
        toggleTheme
    }
}
