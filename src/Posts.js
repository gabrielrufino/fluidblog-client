import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import LastPost from './Posts/LastPost'
import base from './base'

class Posts extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: []
    }

    this.renderPost = this.renderPost.bind(this)
  }
  componentDidMount () {
    base.syncState('posts', {
      context: this,
      state: 'posts',
      asArray: true
    })
  }
  renderPost (post, index, posts) {
    return (
      <div key={this.state.posts.indexOf(post)} className='col col-md-4 my-2'>
        <div className='card'>
          <img className='card-img-top' src='img/img.jpg' alt='' />
          <div className='card-body'>
            <h5 className='card-title'>{ post.title }</h5>
            <p className='card-text'>
              { post.subtitle }
            </p>
            <Link className='btn btn-info btn-block' to='/'>Continue reading</Link>
          </div>
        </div>
      </div>
    )
  }
  render () {
    return (
      <div className='container'>
        <LastPost />
        <div className='row'>
          { this.state.posts.map(this.renderPost) }
        </div>
      </div>
    )
  }
}

export default Posts
