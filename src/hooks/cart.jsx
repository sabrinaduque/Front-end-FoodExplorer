import { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext({});

function CartProvider({ children }) {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem(`@foodexplorer:cart`)) || { quantity: 0 })

  function handleAddDishToCart(quantity) {
    const order = { quantity }
    setCart(order)
    alert("Item adicionado ao carrinho")
  }

  async function handleResetCart() {
    localStorage.removeItem(`@foodexplorer:cart`);
    setCart({ quantity: 0 });
}

  useEffect(() => {
    localStorage.setItem(`@foodexplorer:cart`, JSON.stringify(cart));
  }, [cart])

  return (
    <CartContext.Provider value={{
      cart,
      handleAddDishToCart,
      handleResetCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

function useCart() {
  const context = useContext(CartContext);
  return context;
}

export { CartProvider, useCart };