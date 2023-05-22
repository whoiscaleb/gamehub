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
      <div className="main">
        <div className="col">
          <h2>GameHub</h2>
          <p>Reviews on the latest games releasing. Make sure every game is worth that hefty price tag.</p>
          <Link to="/collection">
            <button type="button">Browse Games</button>
          </Link>
        </div>
        <div className="col">
          <div className="card card1"></div>
          <div className="card card2"></div>
          <div className="card card3"></div>
          <div className="card card4"></div>
          <div className="card card5"></div>
          <div className="card card6"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
