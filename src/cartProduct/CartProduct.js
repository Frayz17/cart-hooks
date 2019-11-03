import React from 'react'
import PropTypes from 'prop-types'

function CartProduct ({ item }) {
  const { title, price } = item
  return (
    <p>
      <span>{title} - </span>
      <span>{price}$ </span>
    </p>
  )
}

export default CartProduct

CartProduct.propTypes = {
  item: PropTypes.object.isRequired
}
