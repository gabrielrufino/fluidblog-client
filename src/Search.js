import React, { Component } from 'react'

class Search extends Component {
  render () {
    return (
      <form>
        <input className='form-control my-1' type='search' placeholder='Searching what?' aria-label='Search' />
        <button className='btn btn-outline-info btn-block' type='submit'>Search</button>
      </form>
    )
  }
}

export default Search
