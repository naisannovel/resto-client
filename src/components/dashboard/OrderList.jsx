import React from "react";
import { Table } from "reactstrap";

const OrderList = () => {

  let orderListItem = 
        <tr style={{ height: "50px", lineHeight: "50px" }}>
          <td> ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff </td>
          <td>  </td>
          <td>  </td>
          <td>
            <select id="cars" name="cars" className="naisan">
              <option value="pending">pending</option>
              <option value="ongoing">ongoing</option>
              <option value="done">done</option>
            </select>
          </td>
        </tr>


  return (
    <div className="order__list__container">
      <h1>Order List</h1>
      <Table striped>
        <thead>
          <tr>
            <th>Dish</th>
            <th>Email</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          { orderListItem }
        </tbody>
      </Table>
    </div>
  );
};

export default OrderList;