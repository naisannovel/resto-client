import React from "react";
import { FormGroup, Label } from "reactstrap";
import { dishAdded } from '../../store/dish';
import { useDispatch } from "react-redux";
import { LocalForm, Control, Errors } from 'react-redux-form';


const AddDish = () => {
  const dispatch = useDispatch();

  const required = val => val && val.length;
  const isNum = val => !isNaN(Number(val));

  const handleSubmit = data => {
    const formData = new FormData();
    formData.append('name',data.name);
    formData.append('price',data.price);
    formData.append('about',data.about);
    formData.append('image',data.image[0])
    dispatch(dishAdded(formData))
  };

  let addDishPage = 
        <LocalForm onSubmit={value => handleSubmit(value)}>
        <FormGroup>
          <Label for="name">Dish Name</Label>
          <Control.text 
          model='.name'
          name='name'
          placeholder='name'
          validators={{
            required,
          }}/>
            <Errors
              className="text-danger h4"
              model=".name"
              show="touched"
              messages={{
                required: "Required",
            }}/>
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Control.text
          model='.price'
          name='price'
          placeholder='price'
          validators={{
            required,
            isNum
          }}/>
            <Errors
              className="text-danger h4"
              model=".price"
              show="touched"
              messages={{
                required: "Required!! ",
                isNum: " invalid Price!"
            }}/>
        </FormGroup>
        <FormGroup>
          <Label for="description">About Dish</Label>
          <Control.textarea
          model='.about'
          name='about'
          validators={{
            required,
          }}/>
              <Errors
              className="text-danger h4"
              model=".about"
              show="touched"
              messages={{
                required: "Required",
            }}/>
        </FormGroup>
        <FormGroup>
          <Label for="file" style={{ display: "block" }}>
            Image
          </Label>
          <Control.file 
          model='.image'
          name='image'
          validators={{
            required,
          }}/>
            <Errors
              className="text-danger h4"
              model=".image"
              show="touched"
              messages={{
                required: "Required",
            }}/>
        </FormGroup>
        <button className="primary__btn">Submit</button>
      </LocalForm>
  
  return (
    <div className="add__dish__container">
      <h1>Add Dish</h1>
      <hr />
      { addDishPage }
    </div>
  );
};

export default AddDish;