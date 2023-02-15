import { createTheme } from '@mui/material/styles'

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#F55D3E'
    },
    secondary: {
      main: '#53B3CB'
    },
    background: {
      default: '#FFFBFF'
    },
    text: {
      primary: '#0d1b2a',
      secondary: 'rgba(13,27,42,0.54)',
      disabled: 'rgba(13,27,42,0.38)'
    },
    info: {
      main: '#F9C22E'
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
