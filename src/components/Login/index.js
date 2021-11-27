import React from 'react';
import useFormLogin from './useForm';
import validate from './validateInfo';
import './FormLogin.css';

const Login = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useFormLogin(submitForm, validate);
  return (
    <div className='form-content-right'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Welcome back! Login to your account by filling out the information below.</h1>
        <div className='form-inputs'>
          <label htmlFor='username' className='form-label'>Username</label>
          <input
            id='username'
            type='text'
            name='username'
            className='form-input'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label htmlFor='password' className='form-label'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            className='form-input'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Login
        </button>
        <span className='form-input-login'>
          Don't have an account? Register <a href="/register">here</a>
        </span>
      </form>
    </div>
  )
}

export default Login
