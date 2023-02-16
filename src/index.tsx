import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Router from './routes/router'
import CssBaseline from '@mui/material/CssBaseline'
import type { PaletteMode } from '@mui/material'
import { getTheme } from './styles/defaultTheme'

const App = (): JSX.Element => {
  const [mode, setMode] = useState<PaletteMode>('light')

  // just for tests
  // @ts-ignore
  document.toggleTheme = (mode: PaletteMode) => {
    setMode(mode)
  }

  const theme = React.useMemo(() => createTheme(getTheme(mode)), [mode])

  return <React.StrictMode>
    <BrowserRouter basename="/pwa-react-typescript/">
      <ThemeProvider theme={ theme } >
      <CssBaseline />
        <div style={{ height: '100%' }} className={mode === 'light' ? '' : 'dark'}>
          <Router />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <App></App>
)

const config = {
  onUpdate: () => {
    alert('New update found. Restart your application.')
  }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register(config)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
