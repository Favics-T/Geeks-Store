import { CartContext } from '../Context/CartContext';
// import icons
import { IoAddOutline, IoRemoveOutline, IoCloseOutline } from 'react-icons/io5';
import empty from '../assets/emptyCart.png'
import { Link } from 'react-router-dom';

 const Cart2 = () => {
  const {itemQuantity,itemIncrease,itemDecrease, cart,  removeFromCart, clearCart, total, cartCount } =    useContext(CartContext);
  //  console.log(itemDecrease, "Cart Context")
  //  console.log(itemQuantity)


  return (
   <div>
<h2 className='headers left-1/2 mt-4'>Cart({cartCount})</h2>
<div className=' bg-slate-100 h-auto grid grid-cols-2'>
    {
      cart.length > 0 ?(
       <div>
         <div className='flex bg-white w-[1100px]  top-20'>
                    <div  className=' h-auto py-8 px-8   flex'>                
          <div className='w- border-2 border-black '>
            <div className='grid grid-cols-3 px-8 items-center text-center py-2'>
            <h1 className=' '>Product Image</h1>
            <h1>Product Details</h1>
                              <h1 className='ml-40'>Product Quantity </h1>
            </div>
              {
                cart.map((item)=>(
                  <div key={item.id}
                  className='w-full border border-y-black p-4 flex items-center gap-6'>
 <div className='w-full flex items-center justify-center gap-6'>

<div className='w-2/5'>
<img
className='w-full h-44 object-contain'
src={item.image} 
alt="ProductImg" />    
</div>

<div className='w-4/5'>
<h2 className='font-semibold w-1/2 text-lg'> {item.title} </h2>
<p className='pr-10 w-1/2  text-sm'> {item.description.substring(0,130)} </p>
<p className='text-base'> Unit Price{" "}:
<span className='font-semibold'>${item.price}</span>
</p>

<div className='flex '>
<button  onClick={()=> itemIncrease(item.id)}
className='buttons'>+</button>
<button onClick={()=> removeFromCart(item.id)}
className='buttons'>Erase</button>
<button  onClick={()=> itemDecrease(item.id)} 
className='buttons'>-</button>
</div>

</div>
     </div>
                    <div className='border  '>
<p className='p-20 text-[40px] '>{item.quantity}</p>
</div>
                                           </div>
                                          
                )) }

<button className='relative top-[305px] text-white rounded-2xl left-[200px] bg-red-700 w-[100px] h-[60px] '
                           onClick={clearCart}
                           >Clear cart </button>
          </div>
                  <div className='absolute border-4 border-[#000b53]  w-60 p-10 left-[100%]'>
                  <h1 className='text-center m-4 underline underline-offset-4 font-titleFont'>Order Summary</h1>

<div className='text-black mx-10 '>
  <h1 className='w-36'>Shipping Fee: 0$</h1>
  <h1>Total:${total.toFixed(2)} </h1>
</div>
               </div>
       
</div>
 
</div>

{/* <button>Clear Cart</button> */}

</div>    ):
//             
(
<div className='flex flex-col items-center justify-center h-screen'>
<img src={empty} alt="Empty Cart"
className='w-1/2' />
<Link to='/collection'> 
<h2 className='underline underline-offset-4 mt-4'>Continue Shopping</h2>
</Link>
</div>
)
} 


</div>


</div>
)
}

export default Cart2
