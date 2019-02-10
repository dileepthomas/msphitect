import { combineReducers } from 'redux'
import productsReducer from './productReducer'
import checkoutReducer from './checkoutReducer'


const rootReducer = combineReducers({
    productsReducer,
    checkoutReducer
})

export default rootReducer