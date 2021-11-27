import React, { useState } from 'react';
import Login from '../components/Login';
import LoginSuccess from '../components/Login/LoginSuccess';
import '../components/Login/FormLogin.css';

const LoginPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  };

  const closeLogin = () => {
    window.location.href = '/';
  };

  return (
    <>
      <div className="form-container">
        <span className="close-btn" onClick={closeLogin}>x</span>
        <div className="form-content-left">
          <img src={require('../images/svg-10.svg').default} alt="welcome" className="form-img" />
        </div>
        {!isSubmitted ? <Login submitForm={submitForm} /> : <LoginSuccess /> }
      </div>
    </>
  )
}

export default LoginPage
