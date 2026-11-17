import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0f766e', dark: '#115e59', contrastText: '#ffffff' },
    secondary: { main: '#78716c' },
    background: { default: '#f4f1ea', paper: '#ffffff' },
    text: { primary: '#1c1917', secondary: '#78716c' },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    h2: { fontSize: '1.25rem', fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 600 },
      },
    },
  },
})

export default theme
