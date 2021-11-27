import React from 'react'

const LoginSuccess = () => {
  return (
    <div className="form-content-right">
      <div className="form-success">You have successfully logged in!</div>
      <img src={require('../../images/svg-9.svg').default} alt="success" className="form-img-2" />
    </div>
  )
}

export default LoginSuccess
