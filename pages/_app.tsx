import React from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { AppContextProvider } from '@/context/store'
import theme from '../components/theme'
import '../styles/common.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider session={pageProps.session}>
        <AppContextProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </AppContextProvider>
      </Provider>
    </ThemeProvider>
  )
}
