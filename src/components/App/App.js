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

  const [cartItems, setCartItems] = useState({})

  const existInCart = (obj, item) => {
    return Object.prototype.hasOwnProperty.call(obj, item)
  }

  const isProductAmount = (id, store) => {
    return store[id].quantity > 0
  }

  const findProduct = (id, store) => {
    const _store = { ...store }

    const key = Object.keys(_store).filter(key => _store[key].id === id)
    return { ..._store[key] }
  }

  const handleReturnToInventory = (id) => () => {
    if (isProductAmount(id, cartItems)) {
      const _cartItems = { ...cartItems }
      const _inventoryItems = { ...inventoryItems }

      _cartItems[id].quantity = _cartItems[id].quantity - 1
      _inventoryItems[id].quantity = _inventoryItems[id].quantity + 1

      setCartItems({
        ..._cartItems
      })
    }
  }

  const handleBuyProduct = (id) => () => {
    if (isProductAmount(id, inventoryItems)) {
      const _inventoryItems = { ...inventoryItems }
      const _cartItems = { ...cartItems }

      const item = findProduct(id, _inventoryItems)

      _inventoryItems[id].quantity = _inventoryItems[id].quantity - 1

      if (existInCart(_cartItems, id)) {
        _cartItems[id].quantity += 1
      } else {
        _cartItems[id] = ({
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: 1
        })
      }

      setCartItems({
        ..._cartItems
      })
      setInventoryItems({
        ..._inventoryItems
      })
    }
  }

  const handleCheckout = () => {
    setCartItems({})
  }

  return (
    <>
      <Cart
        cartItems={cartItems}
        inventoryItems={inventoryItems}
        handleBuyProduct={handleBuyProduct}
        handleReturnToInventory={handleReturnToInventory}
        handleCheckout={handleCheckout}
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
