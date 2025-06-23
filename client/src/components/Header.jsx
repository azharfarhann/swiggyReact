import React from 'react'
import "./Header.css"
import logo from "../assets/Image20250623141459.png"

const Header = () => {
  return (
    <>
<div className="head-container">
    <div className="logo">
        <img className='img' src={logo} alt="biryani image" />
    </div>
    <div className="nav-container">
        <div className='nav-items'>
        <ul >
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
            <li>Contact</li>
        </ul>
</div>
    </div>
</div>
      
    </>
  )
}

export default Header
