// ContextWrapper.jsx
import React from 'react';
import ProductProvider from './ProductContext.jsx';
import CartProvider from './CartContext.jsx';
import WishListProvider from './WishListContext.jsx';
import PropTypes from 'prop-types'

const ContextWrapper = ({ children }) => {
  return (
    <WishListProvider>
      <CartProvider>
        <ProductProvider>
          {children}
        </ProductProvider>
      </CartProvider>
    </WishListProvider>
  );
};

ContextWrapper.PropTypes = {
    children: PropTypes.node.isRequired
}

export default ContextWrapper;
