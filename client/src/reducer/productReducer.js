import * as actionTypes from '../actions/actionTypes'

const defaultState ={
    productsData: [],
    productErrorMessage: null,
    productErrorStatus: false,
    productsLoaderStatus: false
}

const productsReducer = (state = defaultState, action) => {
    switch(action.type){
        case actionTypes.PRODUCTS_FETCHING:
            return {
                ...state,
                productsLoaderStatus: action.productsLoaderStatus
            }
        case actionTypes.PRODUCTS_FETCHED:
            return{
                ...state,
                productsData: action.productsData,
                productErrorMessage: action.productErrorMessage,
                productErrorStatus: action.productErrorStatus,
                productsLoaderStatus: action.productsLoaderStatus
            }
        default: 
            return {
                ...state
            }
    }
}

export default productsReducer