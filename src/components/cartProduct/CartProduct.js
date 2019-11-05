import React from 'react'
import PropTypes from 'prop-types'

function CartProduct ({ item, inventoryItem, handleBuyProduct, handleReturnToInventory }) {
  const { id, title, price, quantity } = item

  return (
    <p>
      <span>{title} - </span>
      <span>{price}$ x <span>{quantity}</span></span>
      <button disabled={!inventoryItem.quantity} onClick={handleBuyProduct(id)}>+1</button>
      <button disabled={!quantity} onClick={handleReturnToInventory(id)}>-1</button>
      <span>({inventoryItem.quantity} - in stock)</span>
    </p>
  )
}

export default CartProduct

CartProduct.propTypes = {
  item: PropTypes.object.isRequired
}
