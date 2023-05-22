import React from 'react';
import Main from '../Layouts/Main/Main';
import Header from '../Layouts/Header/Header';
import { Link } from 'react-router-dom';
import '../Assets/Styles/index.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Main />
      </div>
  );
}

export default Home;
