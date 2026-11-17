import Link from 'next/link'
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Button,
  Stack,
  Typography,
} from '@mui/material'
import CartIcon from './CartIcon'
import Logo from './Logo'

// Общая шапка с клиентской навигацией Next <Link>
export default function Layout({ children, title }) {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 4 }}>
      <AppBar position="static" color="transparent" elevation={0} sx={{ mb: 3 }}>
        <Container maxWidth="md">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1, gap: 2 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Logo />
              <Button component={Link} href="/" color="inherit">
                Каталог
              </Button>
              <Button component={Link} href="/live" color="inherit">
                Live SSR
              </Button>
            </Stack>
            <CartIcon />
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="md">
        {title && (
          <Typography variant="h4" component="h1" sx={{ mb: 2, fontWeight: 700 }}>
            {title}
          </Typography>
        )}
        {children}
      </Container>
    </Box>
  )
}
