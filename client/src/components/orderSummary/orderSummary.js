import React, { Component } from "react";
import { connect } from "react-redux";
import "./orderSummary.css";
import Table from "../molecules/table/table";

class OrderSummary extends Component {
  state = {
    tableHeader: ["Prdouct Name", "Price", "Quantity"],
    selectedItemsList: []
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedItems !== nextProps.selectedItems) {
      this._handleTableData(nextProps.selectedItems, nextProps.items);
    }
  }

  _handleTableData = (selectedItems, items) => {
    let tempArr = [];
    Object.keys(selectedItems).forEach(selecltedItem => {
      let tempObj = {};
      tempObj["productName"] = selecltedItem;
      tempObj["price"] =
        selectedItems[selecltedItem] *
        items.find(eachItem => eachItem.name === selecltedItem).price;
      tempObj["quantity"] = selectedItems[selecltedItem];
      tempArr.push(tempObj);
    });
    let filterItems = tempArr.filter(item => item.quantity !== 0);
    this.setState({
      selectedItemsList: [...filterItems]
    });
  };

  render() {
    const { tableHeader, selectedItemsList } = this.state;
    return (
      <div className="order-summary-container">
        <h2>Checkout Summary</h2>
        <Table headers={tableHeader} items={selectedItemsList} />
        {selectedItemsList.length > 0 ? <button>Place Oder</button> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedItems: state.productsReducer.items,
    items: state.productsReducer.productsData
  };
};

export default connect(mapStateToProps)(OrderSummary);
