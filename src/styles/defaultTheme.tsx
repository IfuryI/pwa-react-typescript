import { type PaletteMode, type Theme } from '@mui/material'
import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    accent: {
      main: string
    }
  }
  interface PaletteOptions {
    accent?: {
      main: string
    }
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    accent: true
  }
}
export const getTheme = (mode: PaletteMode): Theme => {
  return mode === 'dark'
    ? darkTheme
    : defaultTheme
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0D1B2A'
    }
  }
})

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#53B3CB'
    },
    secondary: {
      main: '#F9C22E'
    },
    background: {
      default: '#FFFBFF'
    },
    text: {
      primary: '#0d1b2a',
      secondary: 'rgba(13,27,42,0.54)',
      disabled: 'rgba(13,27,42,0.38)'
    },
    accent: {
      main: '#F55D3E'
    }
  },
  typography: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 16,
    h1: {
      fontFamily: 'Cabin, sans-serif',
      fontSize: 24,
      fontWeight: 500
    },
    h2: {
      fontFamily: 'Cabin, sans-serif',
      fontSize: 20,
      fontWeight: 500
    }
  }
})
