import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '../../Pages/Index.js';
import Show from '../../Pages/Show.js';
import CreatePost from '../../Pages/CreatePost.js';

const Main = (props) => {
  const [game, setGame] = useState(null);
  const URL = 'http://localhost:3000/';

  const getGame = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setGame(data);
  };

  const createGame = async (game) => {
    const URL = 'http://localhost:4000/collection/create'; 
  
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(game),
      });
  
      if (response.ok) {
        console.log('Game created successfully');
       
      } else {
        console.log('Failed to create game');
        
      }
    } catch (error) {
      console.log('Error creating game:', error);
      
    }
  };
  

  const updateGame = async (game, id) => {
    await fetch(URL + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(game),
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
        <Route path="/collection" element={<Index game={game} />} />
        <Route
          path="/collection/:id"
          element={<Show game={game} updateGame={updateGame} deleteGame={deleteGame} />}
        />
        <Route
          path="/collection/create"
          element={<CreatePost createGame={createGame} />}
        />

      </Routes>
    </main>
  )
};

export default Main;