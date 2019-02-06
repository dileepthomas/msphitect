import React from 'react'

const product = ({name, price, weight}) => {
    return (
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <p>{weight}</p>
        </div>
    )
}

export default product