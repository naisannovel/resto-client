import React from "react";
import { Alert, Form, FormGroup, Label } from "reactstrap";
import { useForm } from "react-hook-form";
import { dishAdded } from '../../store/dish';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import SpinnerSecondary from '../utilities/SpinnerSecondary';


const AddDish = () => {
  document.title = 'Resto. - Add Dish'
  const dispatch = useDispatch();
  const dish = useSelector(state =>{
    return {
      loading: state.dish.loading,
      successMsg: state.dish.dishSuccessMsg
    }
  })

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = data => {
    const formData = new FormData();
    formData.append('name',data.name);
    formData.append('price',data.price);
    formData.append('about',data.about);
    formData.append('image',data.image[0])
    dispatch(dishAdded(formData))
    reset()
  };

  let addDishPage = null;
  if(!dish.loading){
    addDishPage =
        <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="name">Dish Name</Label>
          <input type="text" {...register("name", { required: true })} placeholder='name' />
          {errors.name && <span className='form__error__style'>dish name is required</span>}
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <input type="price" {...register("price", { required: true })} placeholder='price' />
          {errors.price && <span className='form__error__style'>price is required</span>}
        </FormGroup>
        <FormGroup>
          <Label for="description">About Dish</Label>
          <textarea type="textarea" {...register("about", { required: true })} />
          {errors.about && <span className='form__error__style'>about is required</span>}
        </FormGroup>
        <FormGroup>
          <Label for="file" style={{ display: "block" }}>
            Image
          </Label>
          <input type="file" name='image' {...register("image", { required: true })} />
          {errors.image && <span className='form__error__style' style={{display:'block'}}>image is required</span>}
        </FormGroup>
        <button className="primary__btn">Submit</button>
      </Form>
  }else{
    addDishPage = <SpinnerSecondary/>
  }
  
  return (
    <div className="add__dish__container">
      <h1>Add Dish</h1>
      {  dish.successMsg !== null ? <Alert color="success" style={{fontSize:'16px'}}> { dish.successMsg } </Alert>:'' }
      <hr />
      { addDishPage }
    </div>
  );
};

export default AddDish;