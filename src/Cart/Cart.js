import React from 'react'
import CartProduct from '../cartProduct'
import PropTypes from 'prop-types'

function Cart ({ cartItems }) {
  const listItems = Object.keys(cartItems).map(key => {
    return (
      <CartProduct
        key={cartItems[key].id}
        item={cartItems[key]}
      />
    )
  })

  const view = isObjEmpty(cartItems)
    ? <p>the cart is empty</p> : listItems

  function isObjEmpty (obj) {
    return Object.keys(obj).length === 0
  }

  return (
    <>
      <h2>Cart</h2>
      {view}
      <hr />
    </>
  )
}

export default Cart

Cart.propTypes = {
  cartItems: PropTypes.object.isRequired
}
