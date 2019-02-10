import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'

class Product extends Component {
    render() {
        const {name, price, weight, removeItem, addItem, selectedItems} = this.props
        return (
            <div className="product-child-container">
                <p>Product Name: {name}</p>
                <p>Price: {price} $</p>
                <p>Weight: {weight}</p>
                <p>
                    <button onClick={() => removeItem(name)} name="remove-item">-</button>
                    <Fragment>
                        {
                            selectedItems[name] ? 
                                `Added ${selectedItems[name]} ${selectedItems[name] === 1 ? "item" : "item's" }` 
                                :
                                null
                        }
                    </Fragment>
                    <button onClick={() => addItem(name)} name="add-item">+</button>
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) =>  {
    return {
        selectedItems: state.productsReducer.items
    }
}


export default connect(mapStateToProps)(Product)