import React, { useState } from 'react';
import Register from '../components/Register';
import RegisterSuccess from '../components/Register/RegisterSuccess';
import '../components/Register/FormRegister.css';

const RegisterPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  };

  const closeRegister = () => {
    window.location.href = '/';
  };

  return (
    <>
      <div className="form-container">
        <span className="close-btn" onClick={closeRegister}>x</span>
        <div className="form-content-left">
          <img src={require('../images/svg-8.svg').default} alt="welcome" className="form-img" />
        </div>
        {!isSubmitted ? <Register submitForm={submitForm} /> : <RegisterSuccess /> }
      </div>
    </>
  )
}

export default RegisterPage
