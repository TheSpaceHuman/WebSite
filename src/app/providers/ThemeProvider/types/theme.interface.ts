export enum ETheme {
    LIGHT = 'light',
    DARK = 'dark',
}

export interface IThemeContextProps {
    theme?: ETheme;
    setTheme?: (theme: ETheme) => void
}

export interface IUseThemeResult {
    toggleTheme: () => void;
    theme: ETheme;
}
