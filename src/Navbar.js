import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className='navbar navbar-expand-md navbar-light bg-light fixed-top'>
      <Link className='navbar-brand' to='/'>fluidblog</Link>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/about'>About</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/newpost'>New post</Link>
          </li>
        </ul>
      </div>

      <Link className='btn btn-outline-info px-4 ml-auto mr-1' to='/login'>Sign In</Link>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <i className='navbar-toggler-icon' />
      </button>
    </nav>
  )
}

export default Navbar
