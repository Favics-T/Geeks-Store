import React, { useContext, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { ProductContext } from "../Context/ProductContext";

const Nav = () => {
  const { cartCount } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle Menu for Mobile
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-black sticky top-0 z-50 w-full text-white py-4 px-6 sm:px-8 shadow-lg">
      {/* Desktop and Mobile Nav */}
      <ul className="flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <Link to="/home">
            <li className="font-logoFont0 text-[20px] text-blue-900 cursor-pointer">
              Gee<span className="text-white font-medium">ksStore</span>
            </li>
          </Link>
        </div>

        {/* Links Section */}
        <div className={`hidden md:flex space-x-6`}>
          <Link to="/home">
            <li className="lists hover:text-blue-400 transition-all duration-200">
              Home
            </li>
          </Link>
          <Link to="/collection">
            <li className="lists hover:text-blue-400 transition-all duration-200">
              Collections
            </li>
          </Link>
          <Link to="/men">
            <li className="lists hover:text-blue-400 transition-all duration-200">
              Men
            </li>
          </Link>
          <Link to="/women">
            <li className="lists hover:text-blue-400 transition-all duration-200">
              Women
            </li>
          </Link>
        </div>

        {/* Icons Section */}
        <div className="flex space-x-6 items-center">
          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <MdOutlineShoppingCart
              className="text-[24px] hover:text-blue-400 transition-all duration-200"
              aria-label="Cart Icon"
            />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-blue-500 text-white text-[12px] font-bold rounded-full px-1">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Sign In Icon */}
          <Link to="/signin">
            <FaUserPlus
              className="text-[24px] hover:text-blue-400 transition-all duration-200"
              aria-label="Sign In Icon"
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[24px] hover:text-blue-400 transition-all duration-200"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </ul>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4">
          <Link to="/home">
            <li className="lists hover:text-blue-400 transition-all duration-200">
              Home
            </li>
          </Link>
          <Link to="/collection">
            <li className="lists hover:text-blue-400 transition-all duration-200">
              Collections
            </li>
          </Link>
          <Link to="/men">
            <li className="lists hover:text-blue-400 transition-all duration-200">
              Men
            </li>
          </Link>
          <Link to="/women">
            <li className="lists hover:text-blue-400 transition-all duration-200">
              Women
            </li>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
