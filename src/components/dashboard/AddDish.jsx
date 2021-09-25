import React from "react";
import { Form, FormGroup, Label } from "reactstrap";
import { useForm } from "react-hook-form";


const AddDish = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    reset()
  };

  let addDishPage = 
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
  
  return (
    <div className="add__dish__container">
      <h1>Add Dish</h1>
      <hr />
      { addDishPage }
    </div>
  );
};

export default AddDish;