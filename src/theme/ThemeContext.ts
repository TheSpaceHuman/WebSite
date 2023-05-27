import {createContext} from "react";
import {ETheme} from "./theme.types";

export interface IThemeContextProps {
    theme?: ETheme;
    setTheme?: (theme: ETheme) => void
}
export const ThemeContext = createContext<IThemeContextProps>({});
export const LOCAL_STORAGE_THEME_KEY = 'theme'
