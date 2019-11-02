import React from 'react'
import InventoryProduct from '../InventoryProduct/'
import PropTypes from 'prop-types'

function Inventory ({ inventoryItems, cartItems }) {
  const products = Object.keys(inventoryItems).map(product => {
    return (
      <InventoryProduct
        key={inventoryItems[product].id}
        product={inventoryItems[product]}
        cartItems={cartItems}
      />
    )
  })

  // =========== render ===========
  return (
    <div>
      <h2>Inventory</h2>
      {products}
    </div>
  )
}

export default Inventory

Inventory.propTypes = {
  inventoryItems: PropTypes.object.isRequired,
  cartItems: PropTypes.object.isRequired
}
