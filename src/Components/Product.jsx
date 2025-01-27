import { FaStar } from "react-icons/fa";
import React , { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Product = ( {product} )=>{
     const {  addToCart } = useContext(CartContext);
     
    const {id,title,category,image,price,description,popMessage} = product
// grid grid-cols-4 gap-10
    return(
      <div key={id}
       className="bg-white h-auto border-[1px] border-gray-200 
      py-6 z-30 hover:border-transparent shadow-none
      hover:shadow-textShadow duration-200 flex flex-col gap-4 relative">
        <div className="w-full h-auto flex items-center justify-center relative group">
            <img className="w-52 h-64 object-contain" src={image} alt='Product Image'/>
        <h1 className="text-[90px]">{popMessage}</h1>
        </div>

        <div className="px-4 z-10 bg-white">
            <div className="flex items-center justify-between">
                <h2 className="font-titleFont tracking-wide mt-3 text-lg text-blue-950">{title.substring(0,20)}</h2>
                <p>${price.toFixed(2)}</p>
            </div>
        
        <div>
            <p className="text-sm mt-5">{description.substring(0,90)}....</p>
        </div>

        

        <button onClick={() => addToCart(product)}
        className="w-28 mt-2 cursor-pointer font-titleFont p-2 rounded-2xl font-medium bg-[#000b53] text-white ">
            Add to Cart</button>
        
        
        </div>


       

        </div>


      
    )
}
export default Product