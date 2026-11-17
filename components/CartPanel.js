import { useDispatch, useSelector } from 'react-redux'
import { Button, Paper, Typography } from '@mui/material'
import { clearCart } from '../store/cartSlice'

export default function CartPanel() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.cart.count)
  const message = useSelector((state) => state.cart.message)

  return (
    <Paper elevation={1} sx={{ p: { xs: 2, sm: 3 } }}>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2, minHeight: 48 }}>
        {message}
      </Typography>
      <Button
        fullWidth
        variant="outlined"
        disabled={count === 0}
        onClick={() => dispatch(clearCart())}
      >
        Очистить корзину
      </Button>
    </Paper>
  )
}
