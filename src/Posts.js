import React, { Component } from 'react'

import base from './base'

class Posts extends Component {
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
  renderPost (post) {
    return (
      <article>
        <h1 className='display-4'>{ post.title }</h1>
        <p className='lead'>
          { post.text }
        </p>
      </article>
    )
  }
  render () {
    return (
      <div>
        { this.state.posts.map(this.renderPost) }
      </div>
    )
  }
}

export default Posts
