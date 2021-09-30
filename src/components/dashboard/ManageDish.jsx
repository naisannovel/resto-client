import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { dishUpdate, deleteDishItem, fetchAllDish } from "../../store/dish";
import { useDispatch } from "react-redux";
import SpinnerSecondary from '../utilities/SpinnerSecondary';


const ManageDish = () => {
  document.title = 'Resto. - Manage Dish'

  const dispatch = useDispatch();

  useEffect(()=>dispatch(fetchAllDish()),[])

  const dishes = useSelector(state => {
    return {
      dishItem: state?.dish?.allDishList,
      loading: state?.dish?.loading
    }
  })


  const [editId,setEditId] = useState(null);

  const [InputPrice,setInputPrice] = useState({ price:'' })

  const mapDishItem = dishes?.dishItem?.map((item, i) => 
    <tr key={item._id}>
      <th scope="row" style={{ width: "5%" }}>
      { i+1 }
      </th>
      <td> { item.name } </td>
      <td className='text-center'> 
        { 
        editId !== item?._id  ?
        item.price :             
        <input type="number" name='price' value={InputPrice?.price} 
        onChange={(e)=>setInputPrice({price:e.target.value})} />           
        } 
      </td>
      <td>
      {
        editId !== item?._id ?
        <FontAwesomeIcon className='manage__dish__edit__icon' icon={faEdit} 
        onClick={()=>{
          setEditId(item?._id);
          setInputPrice({price: item?.price})
        }} /> :
        <FontAwesomeIcon onClick={()=>{dispatch(dishUpdate(item?._id,InputPrice));setEditId(null)}} className='manage__dish__check__icon' icon={faCheck} />
      }
      <FontAwesomeIcon onClick={()=> dispatch(deleteDishItem(item?._id))} className='manage__dish__delete__icon' icon={faTrashAlt} />
      </td>
    </tr>
  )
      

  let manageDishPage = null;
  if(!dishes.loading){
    manageDishPage =
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
            { mapDishItem }
          </tbody>
        </Table>
  }else{
    manageDishPage = <SpinnerSecondary/>
  }

  return (
    <div className="manage__dish__container">
      <h1>Manage Dish Items</h1>
      <hr />
      { manageDishPage }
    </div>
  );
};

export default ManageDish;