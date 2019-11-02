import React from 'react'
import PropTypes from 'prop-types'

function Cart ({ cartItems }) {
  function handleView (cartItems) {
    if (isObjEmpty(cartItems)) {
      return (
        <p>the cart is empty</p>
      )
    } else {
      return (<p>{cartItems[3].title}</p>)
    }
  }

  return (
    <div>
      <h2>Cart</h2>
      {
        handleView(cartItems)
      }
      <hr />
    </div>
  )
}

function isObjEmpty (obj) {
  return Object.keys(obj).length === 0
}

export default Cart

Cart.propTypes = {
  cartItems: PropTypes.object.isRequired
}
