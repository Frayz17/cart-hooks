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

  const handleBuyProduct = (id) => () => {
    const _inventoryItems = { ...inventoryItems }
    const _cartItems = { ...cartItems }

    const key = Object.keys(_inventoryItems).filter(key => _inventoryItems[key].id === id)
    const item = { ..._inventoryItems[key] }

    // _inventoryItems[key].quantity = _inventoryItems[key].quantity - 1
    // console.log(item)

    if (existInCart(_cartItems, id)) {
      _cartItems[id].quantity += 1
    } else {
      _cartItems[id] = (
        id: {
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: 0
        }
      )
    }

    console.log(_cartItems)

    setCartItems({
      ...cartItems,
      [id]: item
    })
    setInventoryItems({
      ..._inventoryItems
    })
  }

  const existInCart = (obj, prop) => {
    return Object.prototype.hasOwnProperty.call(obj, prop)
  }

  return (
    <>
      <Cart
        cartItems={cartItems}
      />
      <Inventory
        inventoryItems={inventoryItems}
        cartItems={cartItems}
        handleBuyProduct={handleBuyProduct}
      />
    </>
  )
}

export default App
