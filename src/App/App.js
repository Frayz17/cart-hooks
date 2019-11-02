import React, { useState } from 'react'
import Cart from '../Cart/'
import Inventory from '../Inventory/'

import './App.css'

function App () {
  const [inventoryItems, setInventoryItems] = useState(
    {
      1: {
        id: '1',
        title: 'Apple',
        price: 10,
        quantity: 5
      },

      2: {
        id: '2',
        title: 'Melon',
        price: 20,
        quantity: 7
      },

      3: {
        id: '3',
        title: 'Orange',
        price: 8,
        quantity: 8
      }
    }
  )

  const [cartItems, setCartItems] = useState({
    3: {
      id: '3',
      title: 'Orange',
      price: 8,
      quantity: 8
    }
  })

  return (
    <div>
      <Cart cartItems={cartItems} />
      <Inventory
        inventoryItems={inventoryItems}
        cartItems={cartItems}
      />
    </div>
  )
}

export default App
