import React, {Fragment} from 'react'

const splitUp = (props) => {
    const {courierItems, 
    packages,
    totalPrice,
    totalWeight,
    totalCharge} = props
    return (
        <Fragment >
            <p>Total Packages: {packages}</p>
            <p>Products Price: $ {totalPrice}</p>
            <p>Total Weight: {totalWeight} gm</p>
            <p>Total Charges: {totalCharge}</p>
            <p>Payable Amount: $ {totalPrice + totalCharge}</p>
        </Fragment>
    )
}



export default splitUp