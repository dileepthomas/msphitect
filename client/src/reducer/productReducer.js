import * as actionTypes from '../actions/actionTypes'

const defaultState = {
    productsData: [],
    productErrorMessage: null,
    productErrorStatus: false,
    productsLoaderStatus: false,
    items: {}
}

const productsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.PRODUCTS_FETCHING:
            return {
                ...state,
                productsLoaderStatus: action.productsLoaderStatus
            }
        case actionTypes.PRODUCTS_FETCHED:
            return {
                ...state,
                productsData: action.productsData,
                productErrorMessage: action.productErrorMessage,
                productErrorStatus: action.productErrorStatus,
                productsLoaderStatus: action.productsLoaderStatus
            }
        case actionTypes.ADD_ITEM:
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: state.items[action.payload] ? state.items[action.payload] + 1 : 1
                }
            }
        case actionTypes.REMOVE_ITEM:
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: state.items[action.payload] ? state.items[action.payload] -1 : 0
                }
            }
        default:
            return {
                ...state,
            }
    }
}

export default productsReducer