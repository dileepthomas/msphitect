import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as checkoutActions from "../../actions/checkoutActions";
import { Link } from "react-router-dom";
import SplitUp from '../splitup/splitup'

class Checkout extends Component {
    state ={
        courierItems: [],
        totalPrice: 0,
        totalWeight: 0,
        packages: 0,
        totalCharge: 5
    }

  componentWillMount() {
    this.props.init();
  }

  componentWillReceiveProps(nextProps) {
    const { courierCharges, selectedItems, items } = nextProps;
    this._handleCourierData(courierCharges, selectedItems, items);
  }

  _handleCourierData = (courierCharges, selectedItems, items) => {
    let totalPrice = selectedItems.reduce((total, item)  => {
        return total +  item.price
    },0)
    let totalWeight = selectedItems.reduce((total, item) => {
      return total + (item.quantity *  ( items.find(eachItem => eachItem.name === item.productName).weight) )
    },0)
    let totalCharge = courierCharges.find(courierCharge =>totalWeight >= courierCharge.min &&  totalWeight <= courierCharge.max).charge
    
    if(totalPrice <= 250){
        this.setState({
            courierItems: [...selectedItems],
            packages: 1,
            totalPrice,
            totalWeight,
            totalCharge
        })
    }else{
      let totalPackages = totalPrice / 250;
      let reminderExist = Boolean(Math.floor(totalPrice/250))
      if(reminderExist){
        console.log(selectedItems)
      }
      this.setState({
        courierItems: [...selectedItems],
        packages: totalPackages,
        totalPrice,
        totalWeight,
        totalCharge
      })
    }
  };

  render() {
    const { selectedItems } = this.props;
    const {courierItems, packages, totalPrice, totalWeight, totalCharge} = this.state
    return (
      <div className="checkout-container">
        <h2>Courier Details</h2>
        {Object.keys(selectedItems).length > 0 ? (
          <Fragment>
          <h2> Courier List</h2>
          <SplitUp 
            courierItems={courierItems}
            packages={packages}
            totalPrice={totalPrice}
            totalWeight={totalWeight}
            totalCharge={totalCharge}
          />
          </Fragment>
        ) : (
          <Fragment>
            <h2>Please select some items.</h2>
            <Link to="/">
              <button>Products</button>
            </Link>
          </Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    courierCharges: state.checkoutReducer.courierChargesData,
    selectedItems: state.productsReducer.selectedItems,
    items: state.productsReducer.productsData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    init: () => dispatch(checkoutActions.getCourierCharges())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
