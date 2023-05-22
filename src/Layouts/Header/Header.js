import React from 'react'
// import { Link } from 'react-router-dom'
import { login, logout } from '../../services/firebase';
import '../../Assets/Styles/styles.scss'
import '../../Assets/Styles/index.css'


const Header = (props) => {
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
        {props.user ? 
        <>
        <li className="welcome-msg">Welcome, {props.user.displayName}</li>
        <li>
          <img 
              className="user-img" src={props.user.photoURL}
              alt={props.user.displayName}
              />
        </li>
          <button className="logbtn" onClick={logout} type="button">Logout</button>
          </>
         : 
          <button className="logbtn" onClick={login} type="button">Login</button>
        }
      </div>
    </div>
  )
}

export default Header