import React from 'react'
// importing header in every home page as it is static
import Header from '../components/Header'
// import link for redirecting or navigating internal components
import { Link } from 'react-router-dom'


const Home2 = () => {
    console.log("hello")
    return (
        <div>
            {/* <Header /> */}
            <h1>This is home2 Page</h1>
            <Link to="/">
                <button className='bg-amber-300 rounded-xl m-2 p-2 cursor-pointer'>home2</button>
            </Link >
            <Link to="/about"><button className='bg-amber-300 rounded-xl m-2 p-2 cursor-pointer'>About</button></Link>
            <Link to="/contact">
                <button className='bg-amber-300 rounded-xl m-2 p-2 cursor-pointer'>Contact</button>
            </Link>
            <button className='bg-amber-300 rounded-xl m-2 p-2 cursor-pointer'>
                <a  target="_blank" rel="noopener noreferrrer" href="https://google.com">Google</a>
            </button>


        </div>
    )
}

export default Home2
