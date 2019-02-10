import React from "react";
import './table.css'

const table = props => {
  return (
      <table className="custom-table">
        <thead>
          <tr>
            {
              props.headers.map((header, index) => {
                return (
                  <th key={index}>
                    {header}
                  </th>
                )
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            props.items.map((item, index)  => {
              return (
                <tr key={index}>
                  <td>
                    {item.productName}
                  </td>
                  <td>
                    {item.price}
                  </td>
                  <td>
                    {item.quantity}
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
  )
};

export default table;
