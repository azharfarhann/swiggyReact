import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Contact = () => {
  return (
    <div>
      <Header />
      <h1>This is Contact Page</h1>
      <Link to="/">
                <button className='bg-amber-300 rounded-xl m-2 p-2 cursor-pointer'>home2</button>
            </Link >
            <Link to="/about">
            <button className='bg-amber-300 rounded-xl m-2 p-2 cursor-pointer'>About</button>
            </Link>
            <Link to="/contact">
             <button className='bg-amber-300 rounded-xl m-2 p-2 cursor-pointer'>Contact</button>
            </Link>
            <button className='bg-amber-300 rounded-xl m-2 p-2 cursor-pointer'>
                <a  target="_blank" rel="noopener noreferrrer" href="https://google.com">Google</a>
            </button>
    </div>
  )
}

export default Contact
