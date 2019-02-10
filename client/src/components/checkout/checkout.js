import React , {Component} from 'react'
import {connect} from 'react-redux'
import * as checkoutActions from '../../actions/checkoutActions'

class Checkout extends Component{
    componentWillMount(){
        this.props.init()
    }

    render(){
        const {courierCharges} = this.props
        console.log(courierCharges)
        return(
            <div className="checkout-container">
                Checkout
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        courierCharges: state.checkoutReducer.courierChargesData
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        init: () => dispatch(checkoutActions.getCourierCharges())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)