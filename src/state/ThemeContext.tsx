import { createContext, Context, ComponentProps, useState, useMemo, useEffect } from "react";

export interface ITheme {
  prefersDark: boolean;
}

declare type ThemeContextType = [ITheme, () => void];

declare type IThemeContext = Context<ThemeContextType>;

const getPrefersDark = (): boolean => {
  let prefersDark: string|null = localStorage.getItem('prefers-dark');
  if (prefersDark === null) prefersDark = 'false';
  localStorage.setItem('prefers-dark', prefersDark);
  return JSON.parse(prefersDark);
}

const ThemeContext: IThemeContext = createContext([{ prefersDark: getPrefersDark() }, () => {}]);

export const ThemeProvider = ({ children }: ComponentProps<'div'>) => {
  const [state, setState] = useState<ITheme>({ prefersDark: getPrefersDark() });

  const toggleTheme = (): void => setState({ prefersDark: !state.prefersDark});

  const value = useMemo<ThemeContextType>(() => [state, toggleTheme], [state, toggleTheme]);

  useEffect(() => {
    if (state.prefersDark) localStorage.setItem('prefers-dark', 'true'); 
    if (!state.prefersDark) localStorage.setItem('prefers-dark', 'false'); 
  }, [state, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}; 

export default ThemeContext;