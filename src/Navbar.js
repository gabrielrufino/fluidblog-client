import React from 'react'

const Navbar = (props) => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-primary'>
      <a className='navbar-brand' href='/'>fluidblog</a>

      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <i className='navbar-toggler-icon'></i>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <a className='nav-link' href='/'>Home</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
