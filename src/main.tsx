import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { esES } from '@mui/material/locale'

export const darkTheme = createTheme(
  {
    palette: {
      mode: 'dark',
    },
  },
  esES,
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
