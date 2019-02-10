import React from "react";
import Products from '../products/products'
import OrderSummary from '../orderSummary/orderSummary'

const home = () => {
  return (
    <div className="product-app-container">
      <Products />
      <OrderSummary />
    </div>
  );
};

export default home
