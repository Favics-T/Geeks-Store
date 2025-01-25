import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {Link} from 'react-router-dom'



const Footer = ()=>{
    const today = new Date();

    const header = ''

// Format the date as YYYY-MM-DD
const formattedDate = today.toISOString().split('T')[0];

console.log("Today's date:", formattedDate);
    // const date = day().getYear()
    return(
        <div className="bg-black w-full  font-titleFont px-40 py-10">


<div className="grid grid-cols-4 gap-20 text-white">

<div>
        <h2 className="footerHeader">About GEEKS</h2>
        <ul>
            <li>we are Africa no.1 shopping site</li>
                
                <div className="mt-2">
                <li>Our Social Handles:</li>
            <div className="flex">
                <li> <FaFacebook /> </li>
                <li> <FaTiktok /></li>
                <li> <FaTwitter /></li>
                <li><FaInstagram /></li>
            </div>
                </div>
               
        </ul>
    </div>

    <div>
        <h1 className="footerHeader ">Contacts</h1>

        <p><span className="font-bold">Customer Care:</span>+234 90 632 </p>
    </div>

   

    <div>
        <h2 className="footerHeader">Pages</h2>

        <ul>
          <Link to='/collection'> <li>Collection</li> </Link>  
           <Link to='/women'> <li>Women</li></Link> 
          <Link to='/cart'> <li>Cart</li></Link> 
            <li>SignIn</li>
        </ul>
    </div>

    <div>
        <h2 className="footerHeader">Location</h2>

        <p>No 6, iwofe road, Port Harcourt, Nigeria.</p>
    </div>
</div>


        </div>
    )
}
export default Footer