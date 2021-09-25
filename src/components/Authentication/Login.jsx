import React from "react";
import { Form, FormGroup } from "reactstrap";
import { useForm } from 'react-hook-form';
import Navbar from '../home/Navbar';

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  let loginPage = 
  <div className="container row login__container m-auto">
    <div className="col-md-6 order-1">
      <img src="assets/images/login.jpg" alt="login icon" />
    </div>
    <div className="col-md-6">
      <div className="login__input__container">
        <h1>Log In</h1>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true, pattern:/\S+@\S+\.\S+/,minLength:5,maxLength:255 })}
            />
            {errors.email && <span className='form__error__style'>required</span>}
          </FormGroup>
          <FormGroup>
            <input
              type="password"
              className="mt-4"
              placeholder="Password"
              {...register("password", { required: true,minLength:5,maxLength:255 })}
            />
            {errors.password && <span className='form__error__style'>required - minimum 5 characters</span>}
          </FormGroup>
          <button className="primary__btn mt-5">Log In</button>
        </Form>
        <p>
          Don't have an account? <a href='/signup'>Sign Up</a>
        </p>
      </div>
    </div>
  </div>

  return (
    <div>
      <Navbar/>
      { loginPage }
    </div>
  );
};

export default Login;