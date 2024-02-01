import { createTheme } from '@mui/material/styles';


export const byName = {
  bluishGrey: '#D7E0FF',
  carrot: '#F87070',
  turquoise: '#70F3F8',
  neonPink: '#D881F8',
  deepBlue: '#1E213F',
  darkBlue: '#161932',
};

export const theme = createTheme({
  palette: {
    byName,
    primary: {
      main: '#D7E0FF',
      dark: '#D7E0FF',
      contrastText: '#D7E0FF',
    },

  },
});

export type Theme = typeof theme;

declare module '@mui/material/styles/createPalette' {
  export interface Palette {
    byName: typeof byName;
  }

  export interface PaletteOptions {
    byName?: Partial<Palette['byName']>;
  }
}
