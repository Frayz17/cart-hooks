import React from 'react'
import PropTypes from 'prop-types'

function InventoryProduct ({ product, cartItems }) {
  const { id, title, price, quantity } = product

  function productsSelected () {
    return _productsSelected() === false
      ? <span>selected: 0</span> : <span> selected: {_productsSelected()}</span>

    function _productsSelected () {
      if (cartItems[product.id] !== undefined) {
        return cartItems[product.id].quantity
      }
      return false
    }
  }

  return (
    <p key={id}>
      <span>{title} - </span>
      <span>{price}$ </span>
      <button>buy</button>
      <span>
        (in stock: {quantity} {productsSelected()})
      </span>
    </p>
  )
}

export default InventoryProduct

InventoryProduct.propTypes = {
  product: PropTypes.object.isRequired
}
