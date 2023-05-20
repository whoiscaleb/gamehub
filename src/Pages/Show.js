import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Show = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    // Fetch game data from the backend based on the provided ID
    fetch(`http://localhost:4000/collection/${id}`)
      .then(response => response.json())
      .then(data => setGame(data))
      .catch(error => console.log(error));
  }, [id]);

  if (!game) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{game.Game}</h1>
      <img src={game.Image} alt={game.Game} />
      <h3>Genre: {game.Genre}</h3>
      <p>Release Date: {game.ReleaseDate}</p>
      <p>Played On: {game.PlayedOn}</p>
      <p>Hours Played: {game.Hours}</p>
      <p>Rating: {game.Rating}</p>
      <p>Review: {game.Review}</p>
      <p>Publisher: {game.Publisher}</p>
    </div>
  );
};

export default Show;
