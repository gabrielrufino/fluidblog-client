import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Navbar from './Navbar'
import Aside from './Aside'
import Posts from './Posts'
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'
import Footer from './Footer'
import Post from './Post'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Navbar />
          <div className='row'>
            <div className='d-none d-md-block col-md-3 mx-0'>
              <Aside />
            </div>
            <div className='col-md-9 mx-0'>
              <Switch>
                <Route path='/' exact component={Posts} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/post/:id' component={Post} />
                <Route path='*' component={NotFound} />
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
