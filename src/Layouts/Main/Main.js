import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '../../Pages/Index.js';
import Show from '../../Pages/Show.js';
import CreatePost from '../../Pages/CreatePost.js';
import "../../Assets/Styles/index.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Main = (props) => {
  const [gameData, setGameData] = useState(null);
  const URL = 'http://localhost:3000/';

  const navigate = useNavigate();

  const getGame = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setGameData(data);
  };

  const createGame = async (newGame) => {
    const createURL = 'http://localhost:4000/collection/create';

    try {
      const response = await fetch(createURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGame),
      });

      if (response.ok) {
        console.log('Game created successfully');
      } else {
        console.log('Failed to create Game');
      }
    } catch (error) {
      console.log('Error creating Game:', error);
    }
  };

  const updateGame = async (updatedGame, id) => {
    await fetch(URL + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedGame),
    });

    getGame();
  };

  const deleteGame = async (id) => {
    await fetch(URL + id, {
      method: 'DELETE',
    });

    getGame();
  };

  useEffect(() => {
    getGame();
  }, []);

  return (
    <main>
      <Routes>
      <Route
          path="/collection"
          element={props.user ? (
            <Index gameData={gameData} />
          ) : (
            // Use the navigate function to redirect
            () => {
              navigate('/', { replace: true });
              return null;
            }
          )}
        />
        <Route
          path="/collection/:id"
          element={<Show gameData={gameData} updateGame={updateGame} deleteGame={deleteGame} />}
        />
        <Route
          path="/collection/create"
          element={<CreatePost createGame={createGame} />}
        />
      </Routes>
      <div className="main">
        <div className="col">
          <h2>GameHub</h2>
          <p>Reviews on the latest games releasing. Make sure every game is worth that hefty price tag.</p>
          <Link to="/collection">
          <button className="browse-games-button"type="button">Browse Games</button>
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
    </main>
  );
};

export default Main;
