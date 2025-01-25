import React, { useContext, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { Link } from 'react-router-dom'
import { FaUserPlus } from "react-icons/fa6";
import { CartContext } from "../Context/CartContext";
import { ProductContext } from "../Context/ProductContext";

const Nav= ()=>{
  const { cartCount } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();
   const [searchTerm, setSearchTerm] = useState("");
     const {  products } = useContext(ProductContext);
const [] = useState();
     
    const filteredProducts = products.filter((item) => {
      return (
          (selectedCategory ? item.category === selectedCategory : true) &&
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
  });

   

  const navItemClasses = "lists hover:text-blue-400 transition-all duration-200";

    return(
        <div className="bg-black sticky top-0  z-50 w-full  text-white py-6 px-8 sm:px-8 ">
            <ul className="grid grid-cols-3 items-center ">
              <div className={`flex space-x-4 ${isMenuOpen ? 'block' : 'hidd'}`}>
              <Link to='/home'> <li className='font-logoFont0 text-[20px]  text-blue-900  '>Gee<span className="text-white font-medium">ksStore </span></li> </Link> 
              </div>
              
                <div className="flex   ">
              <Link to='/home'><li className="lists  ">Home</li></Link>  
                <Link to='/collection'><li className="lists">Collection's</li></Link>
                <Link to='/men'><li className="lists ">Men</li></Link>
                <Link to='/women'><li className="lists ">Women</li></Link>
                </div>
               
               <div className="flex ml-24 ">
              <Link to='/cart'> 
                <div className="flex relative">
                
                <li className="lists mt-3 inline-block">
                    <MdOutlineShoppingCart className="text-[20px] " aria-label="CartIcon"/> </li>
                    <h1 
                    className="font-titleFont text-blue-500
                     absolute -top-1 left-6  font-bold text-[20px] ">{cartCount}</h1>

                </div>
             </Link>
              
                

               <Link to='/sigin'>  <li className="lists mt-3">< FaUserPlus /></li></Link>
                              </div>
               
            </ul>

        </div>
    )
}
export default Nav