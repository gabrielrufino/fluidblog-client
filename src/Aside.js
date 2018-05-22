import React, { Component } from 'react'

import Writer from './Writer'
import Search from './Search'

class Aside extends Component {
  render () {
    return (
      <aside className='container'>
        <div>
          <Writer />
        </div>
        <div className='ml-4 my-3'>
          <Search />
        </div>
      </aside>
    )
  }
}

export default Aside
