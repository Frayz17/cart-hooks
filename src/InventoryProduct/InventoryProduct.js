import React from 'react'
import PropTypes from 'prop-types'

function InventoryProduct ({ product, cartItems, handleBuyProduct }) {
  const { id, title, price, quantity } = product

  function amountSelected () {
    return existInCart() === false
      ? <span>selected: 0</span> : <span> selected: {existInCart()}</span>

    function existInCart () {
      if (cartItems[product.id] !== undefined) {
        return cartItems[product.id].quantity
      }
      return false
    }
  }

  return (
    <p>
      <span>{title} - </span>
      <span>{price}$ </span>
      <button onClick={handleBuyProduct(id)}>buy</button>
      <span>
        (in stock: {quantity} {amountSelected()})
      </span>
    </p>
  )
}

export default InventoryProduct

InventoryProduct.propTypes = {
  product: PropTypes.object.isRequired
}
