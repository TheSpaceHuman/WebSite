import { createContext } from "react";
import { IThemeContextProps } from "../types/theme.interface";


export const ThemeContext = createContext<IThemeContextProps>({});
export const LOCAL_STORAGE_THEME_KEY = 'theme'
