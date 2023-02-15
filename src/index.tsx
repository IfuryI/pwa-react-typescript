import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { defaultTheme } from './styles/defaultTheme'
import Router from './routes/router'
import CssBaseline from '@mui/material/CssBaseline'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={ defaultTheme } >
      <CssBaseline />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
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
