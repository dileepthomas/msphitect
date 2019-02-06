import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as productActions from '../../actions/productActions'
import Product from './atoms/product'
import Loader from '../atoms/Spinner/Spinner'

class Products extends Component {
    componentDidMount() {
        this.props.init()
    }


    render() {
        const { products } = this.props
        return (
            <Fragment>
                <div className="product-list-container">
                    {
                        products.length > 0 ?
                            products.map(product => {
                                return (
                                    <Product
                                        name={product.name}
                                        price={product.price}
                                        weight={product.weight}
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
        products: state.productsReducer.productsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => dispatch(productActions.getProductData()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products) 
