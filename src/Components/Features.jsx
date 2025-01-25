import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { FcOnlineSupport } from "react-icons/fc";
import { FaRegMoneyBillAlt } from "react-icons/fa";

const Features = () => {


  return (
    <div className='font-bodyFont  place-items-center px-20 py-8 gap-10 grid grid-cols-3'>

        <div>
            <FaShippingFast className='w-20 h-10 ml-14'/>
            <h1 className='featt '>Free Shipping</h1>
            <p className='featp'>We offer Free Shipping and delivery</p>
        </div>

        <div>
            <FcOnlineSupport className='w-20 h-10 ml-28'/>
            <h1 className='featt'>Support 24/7</h1>
            <p className='featp'>We Offer 24/7 Support and attention</p>
        </div>

        <div>
            <FaRegMoneyBillAlt className='w-20 h-10 ml-36'/>
            <h1 className='featt'>Money Return</h1>
            <p className='featp'>We have a refund policy, but it comes with terms and condition.
                
            </p>
        </div>

        

      
    </div>
  )
}

export default Features

