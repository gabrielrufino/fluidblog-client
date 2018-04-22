import React, { Component } from 'react'

import base from './base'

class Posts extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: [],
      loadingPosts: false
    }
  }
  componentDidMount () {
    base.syncState('posts', {
      context: this,
      state: 'posts',
      asArray: true
    })
  }
  renderPost (post) {
    return (
      <div className='col-12 mb-4'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='card-title display-4'>{ post.title }</h2>
            <p className='card-text'>
              { post.text }
            </p>
            <a className='btn btn-primary' href='/'>Continuar lendo</a>
          </div>
        </div>
      </div>
    )
  }
  render () {
    return (
      <div className='row'>
        { this.state.posts.map(this.renderPost) }
      </div>
    )
  }
}

export default Posts
