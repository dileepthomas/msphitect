import * as actionTypes from './actionTypes'

export const getProductData = () => dispatch => {
    dispatch({
        type: actionTypes.PRODUCTS_FETCHING,
        productsLoaderStatus: true
    })
    fetch('/api/products')
        .then(response => response.json())
        .then(responseData => {
            if(responseData.error){
                const err = {
                    message: responseData.error
                }
                throw err
            }
            dispatch({
                type: actionTypes.PRODUCTS_FETCHED,
                productsData: responseData,
                productsLoaderStatus: false
            })
        })
        .catch(err => {
            dispatch({
                type: actionTypes.PRODUCTS_FETCHED,
                productsErrorMessage: err.message,
                productsErrorStatus: true,
                productsLoaderStatus: false
            })
        })
}

export const addItem = (itemName) => dispatch => {
    dispatch({
        type:actionTypes.ADD_ITEM,
        payload: itemName
    })
}

export const removeItem = (itemName) => dispatch => {
    dispatch({
        type: actionTypes.REMOVE_ITEM,
        payload: itemName
    })
}
    