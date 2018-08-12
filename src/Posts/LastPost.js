import React from 'react'
import { Link } from 'react-router-dom'

const LastPost = (props) => (
	<div className='jumbotron'>
		<h1 className='display-4'>Last post</h1>
		<hr />
		<div className='row'>
			<div className='col-md-5 my-2'>
				<img className='img-fluid rounded' src='img/img.jpg' alt='' />
			</div>
			<div className='col-md-7 my-2'>
				<h3>Lorem Ipsum</h3>
				<p className='lead text-justify my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<Link className='btn btn-info btn-block btn-lg' to='/'>Continue reading</Link>
			</div>
		</div>
	</div>
)

export default LastPost
