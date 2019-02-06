import React from 'react'

const product = ({name, price, weight}) => {
    return (
        <div className="product-child-container">
            <p>{name}</p>
            <p>{price}</p>
            <p>{weight}</p>
        </div>
    )
}

export default product