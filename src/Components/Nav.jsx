import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { Link } from 'react-router-dom'
import { FaUserPlus } from "react-icons/fa6";

const Nav= ()=>{
    return(
        <div className="bg-black sticky top-0  z-50 w-full  text-white py-6 px-8">
            <ul className="flex">

               <Link to='/home'> <li className='font-logoFont0 text-[20px] text-blue-900 '>Gee<span className="text-white font-medium">ksStore </span></li> </Link> 

                <div className="flex mx-[200px] ">
              <Link to='/home'><li className="lists">Home</li></Link>  
                <Link to='/collection'><li className="lists">Collection's</li></Link>
                <Link to='/men'><li className="lists">Men</li></Link>
                <Link to='/women'><li className="lists">Women</li></Link>
                </div>
               
               <div className="flex mx-8 ">
              <Link to='/cart'> 
                <div className="flex relative">
                
                <li className="lists mt-3 inline-block">
                    <MdOutlineShoppingCart className="text-[20px] " /> </li>
                    <h1 
                    className="font-titleFont text-blue-500
                     absolute -top-1 left-6  font-bold text-[20px] ">0</h1>

                </div>
             </Link>
               <Link to='wishlist'><li className="lists text-[20px] mt-3"><IoMdHeart /> </li> </Link>
                <input type="text" 
                className="rounded-3xl mt- w-60 h-10" />
                <li className="lists mt-3">< FaUserPlus /></li>
                              </div>
               
            </ul>

        </div>
    )
}
export default Nav