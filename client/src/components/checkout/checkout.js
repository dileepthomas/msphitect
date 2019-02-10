import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as checkoutActions from "../../actions/checkoutActions";
import { Link } from "react-router-dom";

class Checkout extends Component {
    state ={
        courierItems: []
    }

  componentWillMount() {
    this.props.init();
  }

  componentWillReceiveProps(nextProps) {
    const { courierCharges, selectedItems } = nextProps;
    this._handleCourierData(courierCharges, selectedItems);
  }

  _handleCourierData = (courierCharges, selectedItems) => {
    let totalPrice = selectedItems.reduce((total, item)  => {
        return total +  item.price
    },0)
    if(totalPrice <= 250){
        this.setState({
            courierItems: [selectedItems]
        })
    }
  };

  render() {
    const { courierCharges, selectedItems } = this.props;
    return (
      <div className="checkout-container">
        <h2>Courier Details</h2>
        {Object.keys(selectedItems).length > 0 ? (
          <h2> Courier List</h2>
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
