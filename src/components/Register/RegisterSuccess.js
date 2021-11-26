import React from 'react'

const RegisterSuccess = () => {
  return (
    <div className="form-content-right">
      <div className="form-success">Account has been successfully registered!</div>
      <img src={require('../../images/svg-7.svg').default} alt="success" className="form-img-2" />
    </div>
  )
}

export default RegisterSuccess
