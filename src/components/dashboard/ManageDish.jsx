import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";


const ManageDish = () => {

  const [editId,setEditId] = useState(null);

  const [InputPrice,setInputPrice] = useState({ price:'' })

  const mapService = 
      <tr>
            <th scope="row" style={{ width: "5%" }}>
              
            </th>
            <td>  </td>
            <td className='text-center'> 
              {/* { 
              editId  ?
              item.price :             
              <input type="number" name='price' value={InputPrice?.price} 
              onChange={(e)=>setInputPrice({price:e.target.value})} />           
              }  */}
            </td>
            <td>
            {/* {
              editId !== item?._id ?
              <FontAwesomeIcon className='manage__service__edit__icon' icon={faEdit} 
              onClick={()=>{
                setEditId(item?._id);
                setInputPrice({price: item?.price})
              }} /> :
              <FontAwesomeIcon className='manage__service__check__icon' icon={faCheck} 
              onClick={()=>priceUpdateHandler(item,InputPrice,()=>setEditId(null))} />
            } */}
            {/* <FontAwesomeIcon onClick={()=> removeService(item._id)} className='manage__service__delete__icon' icon={faTrashAlt} /> */}
            </td>
          </tr>
    

  let manageDishPage = 
  <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Dish</th>
          <th className='text-center'>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        { mapService }
      </tbody>
    </Table>

  return (
    <div className="manage__dish__container">
      <h1>Manage Dish Items</h1>
      <hr />
      { manageDishPage }
    </div>
  );
};

export default ManageDish;