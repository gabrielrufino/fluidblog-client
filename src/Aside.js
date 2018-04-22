import React, { Component } from 'react'

import base from './base'

class Aside extends Component {
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
  render () {
    return (
      <aside>
        <div>
          <form className='form-inline my-2 my-lg-0'>
            <input className='form-control mr-sm-2' type='search' placeholder='Search here' aria-label='Search' />
            <button className='btn btn-outline-primary my-2 my-sm-0' type='submit'>Search</button>
          </form>
        </div>
      </aside>
    )
  }
}

export default Aside
