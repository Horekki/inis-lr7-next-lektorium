import { Box } from '@mui/material'
import Link from 'next/link'

export default function Logo() {
  return (
    <Box
      component={Link}
      href="/"
      sx={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
    >
      <Box
        component="img"
        src="/assets/logo.svg"
        alt="Лекториум"
        sx={{ height: { xs: 36, sm: 44 }, display: 'block' }}
      />
    </Box>
  )
}
