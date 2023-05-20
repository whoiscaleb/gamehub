import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <nav className="nav">
        <Link to="/">
         <div>Gamehub </div>
        </Link>
        <Link to="/collection/create">
         <div>Create Post </div>
        </Link>
        <Link to="/collection/about">
         <div>About </div>
        </Link>
    </nav>
  )
}

export default Header