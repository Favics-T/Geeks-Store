import { FaStar } from "react-icons/fa";

const Product = ( {product} )=>{

    const {id,title,category,image,price,description} = product
// grid grid-cols-4 gap-10
    return(
        <div className="w-[1300px] mx-auto grid grid-cols-4 mt-10  px-4 ">

            <div 
            key={id}
            className="bg-white h-auto border-[1px] border-gray-200 py-6 z-30
            hover:border-transparent shadow-none hover:shadow-textShadow duration-200
            flex flex-col 
             gap-4 relative ">

<div className="w-full h-auto flex items-center justify-center relative group">
<img src={image} 
className="w-52 h-64 object-contain"
alt="productImage" />
</div>

<div className="px-4 z-10 bg-white">
    <div className="flex items-center justify-between">
        <h2 className="tracking-wide mt-3 text-lg text-black">{title} </h2>
        <p>${price} </p>
    </div>

    <div>
        <p>{description.substring(0,70)}.... </p>
    </div>
</div>

<div className="flex text-[#000b53] ml-4 text-[30px] ">
<FaStar />
<FaStar />
<FaStar />
<FaStar />
</div>

<button 
className="w-28 ml-16  font-titleFont font-medium text-base bg-gradient-to-tr from-[#000b53] to to-blue-700 
border hover:from-[#000b53] hover:to-blue-100 active:bg-gradient-to-bl
active:from-blue-400 active:to-blue-800 duration-200
py-1.5 rounded-md mt-2 ">
    Add to Cart</button>

            </div>
            
        </div>
    )
}
export default Product