import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [game, setGame] = useState(null);

  useEffect(() => {
    // Fetch game data from Mongo
    fetch('/gamehub')
      .then((response) => response.json())
      .then((data) => setGame(data))
      .catch((error) => console.log(error));
  }, []);

  const loaded = () => {
    return game.map((game) => (
      <div key={game._id} className="post">
        <Link to={`/collection/${game._id}`}>
          <h1>{game.Game}</h1>
        </Link>
        <img src={game.Image} alt={game.Game} />
        <h3>{game.Genre}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      {game ? loaded() : loading()}
      <Link to="/collection/create">Create New Post</Link>
    </section>
  );
};

export default Index;
