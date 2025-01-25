import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const Cart = () => {

  const{cart,cartCount,itemIncrease,itemDecrease}= useContext(CartContext)

  return (
    <div className='h-[1000vh]'>
        {
          cart.length> 0?(
          <div className=''>

                  <h1 className='border border-1  border-[#000b53] w-44 text-center rounded-lg relative left-[45%] '>Cart({cartCount})</h1>

              <div className='grid grid-cols-2  h-96  my-20 mx-20 '>
                {/* cart Body Starts Here */}
                  <div className='border-2 border-black h-auto w-[900px]'>
                   
                   {/* Cart Header Starts Here */}
                    <div className='border border-b border-black py-2 px-8  grid grid-cols-3'>
                      <h1>Product Image</h1>
                      <h1>Description</h1>
                      <h1>Product Quantity</h1>
                    </div>
                    {/* Cart Header Ends Here */}


                    {/* Cart Items Start Here */}
                      {
                        cart.map((item)=>(
                          <div key={item.id} 
            className='w-full p-4 flex items-center border-y-black gap-6'>
                            <div className='w-full flex items-center justify-center gap-6'>
                              <div className='w-2/5 '>
                              <img src={item.image} 
                              className=' object-contain h-44 -ml-[300px]'
                               alt="ProductImg" />                                             </div>
                            </div>
                          </div>
                        ))
                      }
                    {/* Cart Items Ends Here */}

                  </div>
                {/* Cart Body ends Here */}

                {/* Checkout Starts here */}
                  <div className='w-[250px] border border-black h-96 relative left-[350px] '>
                    <h1 className='text-center font-bold'>CheckOut</h1>
                  </div>
                {/* CheckOut Ends here */}
              </div>
          </div>):
           
          (<div></div>)
        }
      
      

    </div>
  )
}

export default Cart
