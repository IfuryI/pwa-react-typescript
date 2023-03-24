import { type PaletteMode, type Theme } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { type TypographyOptions } from '@mui/material/styles/createTypography'

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

const typography: TypographyOptions = {
  fontFamily: 'Lato, sans-serif',
  h1: {
    fontFamily: 'Cabin, sans-serif',
    fontWeight: 600,
    fontSize: '1.5rem'
  },
  h2: {
    fontFamily: 'Cabin, sans-serif',
    fontWeight: 600,
    fontSize: '1.25rem'
  },
  body1: {
    fontSize: '1rem',
    lineHeight: '130%'
  },
  body2: {
    fontSize: '1rem',
    lineHeight: '130%',
    opacity: '50%'
  },
  subtitle1: {
    fontSize: '0.75rem',
    lineHeight: '130%'
  }
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0D1B2A',
      paper: '#192B3E'
    }
  },
  typography
})

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#2EAB67'
    },
    secondary: {
      main: '#F9C22E'
    },
    error: {
      main: '#FF36AB'
    },
    background: {
      default: '#FFFBFF',
      paper: '#FFFFFF'
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

  typography,
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          color: 'white'
        },
        root: {
          fontSize: '1rem',
          fontWeight: 600,
          borderRadius: '5rem',
          textTransform: 'none'
        },
        containedPrimary: {
          color: '#FFFFFF'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '1rem'
        }
      }
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(46,171,103,0.54)',
          padding: '.25rem 1rem',
          textTransform: 'none',
          textSize: '1rem',
          '&.Mui-selected': {
            borderColor: 'rgba(46,171,103,1)'
          }
        }
      }
    }
  },
  shape: {
    borderRadius: 8
  },
  shadows: [
    'none',
    '0px 24px 48px rgba(40, 6, 40, 0.1), 0px 12.15px 20.925px rgba(40, 6, 40, 0.0675), 0px 4.8px 7.8px rgba(40, 6, 40, 0.05), 0px 1.05px 2.775px rgba(40, 6, 40, 0.0325)',
    '0px 24px 48px rgba(40, 6, 40, 0.1), 0px 12.15px 20.925px rgba(40, 6, 40, 0.0675), 0px 4.8px 7.8px rgba(40, 6, 40, 0.05), 0px 1.05px 2.775px rgba(40, 6, 40, 0.0325)',
    'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'
  ]
})
