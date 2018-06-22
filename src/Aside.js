import React, { Component } from 'react'

import Writer from './Aside/Writer'
import Search from './Aside/Search'

class Aside extends Component {
  render () {
    return (
      <aside className='container'>
        <Writer />
        <Search />
      </aside>
    )
  }
}

export default Aside
