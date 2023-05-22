import React from 'react'
// import { Link } from 'react-router-dom'

const Header = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
  };

  return (
     <div className='header'>
        <div className="logo">
          <h1>
            <a href="/" style={linkStyle}>GameHub</a>
          </h1>
        </div>
        <nav className="navigation">
        <ul>
          <li><a href="/collection/create">Create Post</a></li>
          <li><a href="/collection">Games</a></li>
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