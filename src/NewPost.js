import React, { Component } from 'react'

import base from './base'

class NewPost extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: []
    }
  }
  componentDidMount () {
    base.syncState('posts', {
      context: this,
      state: 'posts',
      asArray: true
    })
  }
  handlePost (event) {
    base.push('/posts', {
      data: {
        title: 'test',
        subtitle: 'test',
        text: 'test'
      }
    })
    event.preventDefault()
  }
  render () {
    return (
      <div className='container'>
        <h1 className='display-4'>New Post</h1>
        <form onSubmit={this.handlePost}>
          <div className='form-row'>
            <div className='col-md-7'>
              <div className='form-group'>
                <label className='text-success'>Title</label>
                <input className='form-control' type='text' placeholder='Give a title to your post' />
              </div>
            </div>
            <div className='col-md-5'>
              <div className='form-group'>
                <label className='text-success'>Subtitle</label>
                <input className='form-control' type='text' placeholder='Call to post' />
              </div>
            </div>
          </div>
          <div className='form-group'>
            <label className='text-success'>Text</label>
            <textarea className='form-control' placeholder='Write your text here...' rows='20' />
          </div>
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    )
  }
}

export default NewPost
