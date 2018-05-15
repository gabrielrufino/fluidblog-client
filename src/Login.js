import React, { Component } from 'react'

class Login extends Component {
  handleLogin (event) {
    event.preventDefault()
  }
  render () {
    return (
      <div className='container'>
        <h1 className='display-4 text-center'>Login</h1>
        <form onSubmit={this.handleLogin}>
          <div className='form-group'>
            <label>E-mail</label>
            <input className='form-control' type='email' placeholder='Put your E-mail' />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input className='form-control' type='pass' placeholder='Put your password' />
          </div>
          <button type='submit' className='btn btn-success btn-block'>Log In</button>
        </form>
      </div>
    )
  }
}

export default Login
