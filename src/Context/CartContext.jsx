import React, { createContext, useState, useEffect, useContext } from "react";
// create context
export const CartContext = createContext();

const CartProvider = ({ children })=>{
  // cart state
  const [ cart, setCart ] = useState(()=>{
    // saving cart to local storage
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [task,setTask] = useState([])

  const [ cartCount, setCartCount ] = useState(0);
  // item amount state
  const [ itemQuantity, setItemQuantity ] = useState(1);
  // total price state
  const [ total, setTotal ] = useState(0);
  // cart count state
 const[popMessage, setPopMessage] = useState('')

 const removeFromCarts = (id)=>{
  setCart((prevItems)=> prevItems.filter((item)=> item.id !==id

))
}

 useEffect(() => {
  const totalItems = cart.reduce((acc, item) => 
    acc + item.quantity, 0);
  setCartCount(totalItems);
}, [cart]);

 const itemIncrease = (itemId) => {
  setCart((prevItems) =>
    prevItems.map((item) =>
      item.id === itemId
        ? { ...item, quantity: item.quantity + 1 } // Increase the quantity by 1
        : item
    )
  );
};


const itemDecrease = (itemId) => {
  setCart((prevItems) =>
    prevItems.map((item) =>
      item.id === itemId
        ? { ...item, quantity: Math.max(item.quantity - 1, 1) } // Prevent going below 1
        : item
    )
  );
};


 // Add to cart function
 const addToCart = (newItem) => {
  setCart((prevItems) => {
    // Check if item exists
    const itemExist = prevItems.find((item) => 
      item.id === newItem.id);

    // If item exists, update quantity
    if (itemExist) {
      return prevItems.map((item) =>
        item.id === newItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // Add new item to cart
      return [...prevItems, { ...newItem, quantity: 1 }];
    } });
setPopMessage('Added to cart');
setTimeout(() => setPopMessage('')
  , 3000);
};

  useEffect(() => {
    const calculatedTotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(calculatedTotal);
    // Save cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


 // Remove from cart function
  const removeFromCart = (id, removeAll = false) => {
   
    setCart((prevItems) => {
      if (removeAll) {
        // Remove the entire item
        return prevItems.filter((item) => item.id !== id);
      } else {
        // Decrease the quantity by 1 or remove the item if quantity is 1
        return prevItems
          .map((item) =>
            item.id === id ? { ...item, quantity: Math.max( item.quantity - 1,0) } : item
          )
          .filter((item) => item.quantity > 0);
      }
    });
  };

 

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    const calculatedTotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(calculatedTotal);

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(totalItems);

    // Save cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  
  


  return (
    <CartContext.Provider value={{
      popMessage,
      setPopMessage,
      cart,
      addToCart,
      removeFromCart,
      removeFromCarts,
      clearCart,
      total,
      cartCount,
      itemQuantity,
      setItemQuantity,
      itemDecrease,
      itemIncrease
       }}>
      { children }
    </CartContext.Provider>
  )
};

export default CartProvider;

