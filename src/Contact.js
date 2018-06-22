import React, { Component } from 'react'

import base from './base'

class Contact extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      message: ''
    }

    this.handleName = this.handleName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleMessage = this.handleMessage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clean = this.clean.bind(this)
  }
  handleName (event) {
    this.setState({
      name: event.target.value
    })
    event.preventDefault()
  }
  handleEmail (event) {
    this.setState({
      email: event.target.value
    })
    
    event.preventDefault()
  }
  handleMessage (event) {
    this.setState({
      message: event.target.value
    })

    event.preventDefault()
  }
  handleSubmit (event) {
    base.push('contacts', {
      data: {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      }
    })
      .then(() => {
        this.clean()
      })

    event.preventDefault()
  }
  clean () {
    this.setState({
      name: '',
      email: '',
      message: ''
    })
  }
  render () {
    return (
      <div className="container">
        <h1 className="display-4">Contact</h1>
        <hr />
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="text-info" htmlFor="name">Name</label>
              <input className="form-control" type="text" id="name" value={this.state.name} onChange={this.handleName} placeholder="Your Name" required />  
            </div>

            <div className="form-group">
              <label className="text-info" htmlFor="email">E-mail</label>
              <input className="form-control" type="email" id="email" value={this.state.email} onChange={this.handleEmail} placeholder="youremail@yourdomain.com" required />
            </div>

            <div className="form-group">
              <label className="text-info" htmlFor="message">Message</label>
              <textarea className="form-control" id="message" value={this.state.message} onChange={this.handleMessage} rows="10" maxLength="600" placeholder="What do you want to tell me?" required />
            </div>

            <button className="btn btn-info btn-block" type="submit">Submit</button>
          </form>    
        </div>
      </div>
    )
  }
}

export default Contact
