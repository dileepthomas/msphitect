import React, { Component } from 'react';
import './App.css';
import Products from './components/products/products'
import OrderSummary from './components/orderSummary/orderSummary'


class App extends Component {
  render() {
    return (
     <div className="product-app-container">
      <Products /> 
      <OrderSummary />
     </div>
    );
  }
}

export default App;
