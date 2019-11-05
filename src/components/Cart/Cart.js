import React from 'react'
import CartProduct from '../cartProduct'
import PropTypes from 'prop-types'

function Cart ({
  cartItems,
  inventoryItems,
  handleBuyProduct,
  handleReturnToInventory,
  handleCheckout
}) {
  const listItems = Object.keys(cartItems).map(key => {
    return (
      <CartProduct
        key={cartItems[key].id}
        item={cartItems[key]}
        inventoryItem={inventoryItems[key]}
        handleBuyProduct={handleBuyProduct}
        handleReturnToInventory={handleReturnToInventory}
      />
    )
  })

  const view = isObjEmpty(cartItems)
    ? <p>the cart is empty</p> : listItems

  function isObjEmpty (obj) {
    return Object.keys(obj).length === 0
  }

  const totalCheck = Object.keys(cartItems).reduce((acc, curr) => {
    return acc + (cartItems[curr].price * cartItems[curr].quantity)
  }, 0)

  return (
    <>
      <h2>Cart</h2>
      {view}
      <div>Total: <span>{totalCheck}$</span></div>
      <button onClick={handleCheckout}>Checkout</button>
      <hr />
    </>
  )
}

export default Cart

Cart.propTypes = {
  cartItems: PropTypes.object.isRequired
}
