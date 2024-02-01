import { createContext, useState } from 'react';
import type { PropsWithChildren } from 'react';
import { Colors, Fonts } from './ThemeContext.enumerations';

export const ThemeContext = createContext<any>(
  {},
);

export const CustomThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const [themeColor, setThemeColor] = useState(Colors.Carrot);
  const [themeFont, setThemeFont] = useState(Fonts.KumbhSans);

  console.log('themeColor', themeColor);
  console.log('themeFont Content', themeFont);

  const switchFont = (font:Fonts) => {
    setThemeFont(font);
  }

  const switchColor = (color:Colors) => {
    setThemeColor(color);
  }

  return (
    <ThemeContext.Provider value={{ themeColor, switchColor, themeFont, switchFont }}>
      {children}
    </ThemeContext.Provider>
  );
};