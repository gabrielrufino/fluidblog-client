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
import Login from './Login'
import NotFound from './NotFound'
import Footer from './Footer'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Navbar />
          <div className='row'>
            <div className='col-lg-3'>
              <Aside />
            </div>
            <div className='col-lg-9'>
              <Switch>
                <Route path='/' exact component={Posts} />
                <Route path='/about' component={About} />
                <Route path='/login' component={Login} />
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
