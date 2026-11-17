import PropTypes from 'prop-types'
import { Button, ButtonGroup, Typography } from '@mui/material'

export default function QuantitySelector({ value, min = 1, max = 99, onChange }) {
  return (
    <ButtonGroup variant="outlined" size="small" aria-label="Количество">
      <Button disabled={value <= min} onClick={() => onChange(value - 1)} aria-label="Уменьшить">
        −
      </Button>
      <Button disabled sx={{ pointerEvents: 'none', minWidth: 48 }}>
        <Typography component="span" fontWeight={600}>
          {value}
        </Typography>
      </Button>
      <Button disabled={value >= max} onClick={() => onChange(value + 1)} aria-label="Увеличить">
        +
      </Button>
    </ButtonGroup>
  )
}

QuantitySelector.propTypes = {
  value: PropTypes.number.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func.isRequired,
}
