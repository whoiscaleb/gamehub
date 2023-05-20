import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
   <div>
    <h1>Welcome to GameHub</h1>
    <h3>See what everybody is playing</h3>
    <Link to="/collection">
        <button>Browse Collections</button>
      </Link>
   </div>
   
  )
}

export default Home