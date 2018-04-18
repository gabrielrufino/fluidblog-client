import React, { Component } from 'react'

import Navbar from './Navbar'
import Posts from './Posts'
import Footer from './Footer'

class App extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Posts />
        <Footer />
      </div>
    )
  }
}

export default App
