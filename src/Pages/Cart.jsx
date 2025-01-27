import { CartContext } from '../Context/CartContext';
import React, { useContext } from 'react';
// import icons
import { IoAddOutline, IoRemoveOutline, IoCloseOutline } from 'react-icons/io5';
import empty from '../assets/emptyCart.png';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { itemIncrease, itemDecrease, cart, removeFromCarts, clearCart, total, cartCount } = useContext(CartContext);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center mt-4">Cart ({cartCount})</h2>

      {/* Cart Body */}
      <div className="mt-6">
        {cart.length > 0 ? (
          <div className="flex flex-col lg:flex-row">
            {/* Cart Items */}
            <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
              <div className="grid grid-cols-3 font-semibold text-center border-b pb-2">
                <p>Product Image</p>
                <p>Product Details</p>
                <p>Quantity</p>
              </div>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-3 items-center gap-4 border-b py-4"
                >
                  <div className="flex justify-center">
                    <img
                      className="w-24 h-24 object-contain"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-600">
                      {item.description.substring(0, 130)}...
                    </p>
                    <p>
                      Unit Price:{" "}
                      <span className="font-semibold">${item.price}</span>
                    </p>
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => itemIncrease(item.id)}
                        className="px-3 py-1 bg-blue-500 text-white rounded"
                        aria-label="Increase Quantity"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCarts(item.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded"
                        aria-label="Remove Item"
                      >
                        Erase
                      </button>
                      <button
                        onClick={() => itemDecrease(item.id)}
                        className="px-3 py-1 bg-blue-500 text-white rounded"
                        aria-label="Decrease Quantity"
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-semibold">{item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:ml-8 mt-6 lg:mt-0 bg-blue-50 p-4 rounded-lg shadow-md w-full lg:w-1/4">
              <h3 className="text-center font-semibold underline mb-4">
                Order Summary
              </h3>
              <p>Shipping Fee: $0</p>
              <p className="font-semibold text-lg">Total: ${total.toFixed(2)}</p>
              <button
                className="w-full bg-red-600 text-white py-2 rounded mt-4"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>
        ) : (
          // Empty Cart
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <img src={empty} alt="Empty Cart" className="w-1/2" />
            <Link to="/collection" className="mt-4 text-blue-600 underline">
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
