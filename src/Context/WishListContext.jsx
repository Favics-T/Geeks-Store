import React, { createContext, useState } from 'react'
export const WishListContext = createContext();

const WishListProvider = () => {
    const [wishlist,setWishList] = useState([]);



  return (
    <div>

      
    </div>
  )
}

export default WishListProvider
