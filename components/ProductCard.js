import { useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material'
import QuantitySelector from './QuantitySelector'
import { addToCart, buyNow } from '../store/cartSlice'

// Карточка курса: props с страницы (SSG/SSR), действия корзины — через Redux
export default function ProductCard({ id, title, price, image, description }) {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)

  return (
    <Card elevation={2} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ height: { xs: 140, sm: 180 }, objectFit: 'contain', bgcolor: '#fafaf9', p: 2 }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h2"
          component={Link}
          href={`/courses/${id}`}
          sx={{ textDecoration: 'none', color: 'text.primary', display: 'block', mb: 1 }}
        >
          {title}
        </Typography>
        {description && (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {description}
          </Typography>
        )}
        <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
          {price * quantity} BYN
        </Typography>
        <QuantitySelector value={quantity} onChange={setQuantity} />
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} width="100%">
          <Button fullWidth variant="contained" onClick={() => dispatch(addToCart(quantity))}>
            В корзину
          </Button>
          <Button fullWidth variant="outlined" onClick={() => dispatch(buyNow(quantity))}>
            Купить сейчас
          </Button>
        </Stack>
      </CardActions>
    </Card>
  )
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string,
}
