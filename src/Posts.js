import React, { Component } from 'react'

import base from './base'

class Posts extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: [],
      loadingPosts: false
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
  renderLastPost() {
    
    return (
      <div className='jumbotron'>
        <h1 className='display-4'>Last post</h1>
        <hr />
        <div className='row'>
          <div className='col-md-5 my-2'>
            <img className='img-fluid rounded' src='img/img.jpg' alt='' />
          </div>
          <div className='col-md-7 my-2'>
            <h3>Lorem Ipsum</h3>
            <p className='lead text-justify my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className='btn btn-info btn-block btn-lg'>Continue reading</button>
          </div>
        </div>
      </div>
    )
  }
  renderPost (post) {
    return (
      <div key={ this.state.posts.indexOf(post) } className='col col-md-4 my-2'>
        <div className='card'>
          <img className='card-img-top' src='img/img.jpg' alt='' />
          <div className='card-body'>
            <h5 className='card-title'>{ post.title }</h5>
            <p className='card-text'>
              { post.subtitle }
            </p>
            <a className='btn btn-info btn-block' href='/'>Continue reading</a>
          </div>
        </div>
      </div>
    )
  }
  render () {
    return (
      <div className='container'>
        {
          this.renderLastPost()
        }
        {/* {
          this.state.loadingPosts &&
          <p>Carregando...</p>
        } */}
        {
          !this.state.loadingPosts &&
          <div className='row'>
            { this.state.posts.map(this.renderPost) }
          </div>
        }
      </div>
    )
  }
}

export default Posts
