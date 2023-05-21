import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
     <div className='header'>
        <div className="logo">
          <h1> Gamehub</h1>
        </div>
        <nav className="navigation">
        <ul>
          <li><a href="/collection">Browse</a></li>
          <li><a href="/">Contact</a></li>
          <li><a href="/">About</a></li>
        </ul>
      </nav>
      <div className="btn">
        <button type="button">Login</button>
      </div>
    </div>
  )
}

export default Header