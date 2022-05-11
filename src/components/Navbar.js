import React from 'react'
import logo from '../react-logo.png'
export default function Navbar() {
  return (
    <header>
      <nav>
        <img className="nav--icon" alt="react-logo" src={logo}></img>
        <h3 className='nav--logo_text'>ReactFacts</h3>
        <h4 className='nav--title'>React Course - Project 1</h4>
      </nav>
    </header >
  )
}