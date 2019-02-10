import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as productActions from '../../actions/productActions'
import Product from './atoms/product'
import Loader from '../atoms/Spinner/Spinner'
import './products.css'

class Products extends Component {
    componentDidMount() {
        this.props.init()
    }


    render() {
        const { products, productsLoaderStatus, addItemHandler, removeItemHandler } = this.props
        return (
            <Fragment>
                <div className="product-parent-container">
                    {
                        products.length > 0 && !productsLoaderStatus ?
                            products.map((product, index) => {
                                return (
                                    <Product
                                        key={index}
                                        name={product.name}
                                        price={product.price}
                                        weight={product.weight}
                                        addItem={addItemHandler}
                                        removeItem={removeItemHandler}
                                    />
                                )
                            })
                            :
                            <Loader />
                    }
                </div>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        products: state.productsReducer.productsData,
        productsLoaderStatus: state.productsReducer.productsLoaderStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => dispatch(productActions.getProductData()),
        addItemHandler: (itemName) => dispatch(productActions.addItem(itemName)),
        removeItemHandler: (itemName) => dispatch(productActions.removeItem(itemName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products) 
