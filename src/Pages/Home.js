import React from 'react'
import { Link } from 'react-router-dom'
import Main from '../Layouts/Main/Main';
import Header from '../Layouts/Header/Header';

const Home = () => {
  return (
   <div className="home">
      <Header/>
      <Main />
   </div>
   
  )
}

export default Home