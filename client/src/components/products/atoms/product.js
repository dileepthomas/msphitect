import React from 'react'

const product = ({ name, price, weight, removeItem, addItem }) => {
    return (
        <div className="product-child-container">
            <p>{name}</p>
            <p>{price}</p>
            <p>{weight}</p>
            <p>
                <button onClick={() => removeItem(name)} name="remove-item">-</button>
                <button onClick={() => addItem(name)} name="add-item">+</button>
            </p>
        </div>
    )
}

export default product