import React from 'react'
import InventoryProduct from '../InventoryProduct/'
import PropTypes from 'prop-types'

function Inventory ({ inventoryItems, cartItems, handleBuyProduct }) {
  const products = Object.keys(inventoryItems).map(product => {
    return (
      <InventoryProduct
        key={inventoryItems[product].id}
        product={inventoryItems[product]}
        cartItems={cartItems}
        handleBuyProduct={handleBuyProduct}
      />
    )
  })

  // =========== render ===========
  return (
    <>
      <h2>Inventory</h2>
      {products}
    </>
  )
}

export default Inventory

Inventory.propTypes = {
  inventoryItems: PropTypes.object.isRequired,
  cartItems: PropTypes.object.isRequired
}
