import { useSelector } from 'react-redux'
import { Badge, IconButton } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

export default function CartIcon() {
  const count = useSelector((state) => state.cart.count)

  return (
    <IconButton aria-label={`Корзина: ${count}`} color="primary" size="large">
      <Badge badgeContent={count} color="primary" max={99} showZero={false}>
        <ShoppingCartOutlinedIcon />
      </Badge>
    </IconButton>
  )
}
