import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { FcOnlineSupport } from "react-icons/fc";
import { FaRegMoneyBillAlt } from "react-icons/fa";

const Features = () => {


  return (
    <div className="font-bodyFont px-20 py-8 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
    <div className="flex flex-col items-center">
        <FaShippingFast className="w-10 h-10 text-blue-500" />
        <h1 className="text-lg font-bold mt-2">Free Shipping</h1>
        <p className="text-gray-600 text-sm">We offer Free Shipping and delivery</p>
    </div>

    <div className="flex flex-col items-center">
        <FcOnlineSupport className="w-10 h-10" />
        <h1 className="text-lg font-bold mt-2">Support 24/7</h1>
        <p className="text-gray-600 text-sm">We offer 24/7 Support and attention</p>
    </div>

    <div className="flex flex-col items-center">
        <FaRegMoneyBillAlt className="w-10 h-10 text-green-500" />
        <h1 className="text-lg font-bold mt-2">Money Return</h1>
        <p className="text-gray-600 text-sm">
            We have a refund policy, but it comes with terms and conditions.
        </p>
    </div>
</div>

  )
}

export default Features

