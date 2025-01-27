import React from "react";
import { FaFacebook, FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black w-full font-titleFont px-10 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-white">
        {/* About Section */}
        <div>
          <h2 className="footerHeader">About GEEKS</h2>
          <p>We are Africa's no.1 shopping site.</p>
          <div className="mt-4">
            <h3 className="font-bold mb-2">Our Social Handles:</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-xl hover:text-blue-500 transition-all" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="text-xl hover:text-black transition-all" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-xl hover:text-blue-400 transition-all" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-xl hover:text-pink-500 transition-all" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="footerHeader">Contacts</h2>
          <p>
            <span className="font-bold">Customer Care:</span> +234 90 632
          </p>
        </div>

        {/* Pages Section */}
        <div>
          <h2 className="footerHeader">Pages</h2>
          <ul className="space-y-2">
            <Link to="/collection" className="hover:text-blue-400 transition-all">
              <li>Collection</li>
            </Link>
            <Link to="/women" className="hover:text-blue-400 transition-all">
              <li>Women</li>
            </Link>
            <Link to="/cart" className="hover:text-blue-400 transition-all">
              <li>Cart</li>
            </Link>
            <Link to="/signin" className="hover:text-blue-400 transition-all">
              <li>Sign In</li>
            </Link>
          </ul>
        </div>

        {/* Location Section */}
        <div>
          <h2 className="footerHeader">Location</h2>
          <p>No 6, Iwofe Road, Port Harcourt, Nigeria.</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 mt-10">
        &copy; {currentYear} GeeksStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
