import React, { Component } from 'react'

import Navbar from './Navbar'
import Aside from './Aside'
import Posts from './Posts'
import Footer from './Footer'

class App extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <div className='row'>
          <div className='col-lg-4 p-2'>
            <Aside />
          </div>
          <div className='col-lg-8 p-2'>
            <Posts />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
