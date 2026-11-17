import PropTypes from 'prop-types'
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from '../theme'
import StoreProvider from '../store/StoreProvider'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </ThemeProvider>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}
