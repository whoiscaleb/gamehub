import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../Assets/Styles/index.css'

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
    <div className="show-container">
      <h1 className="show-gametitle">{game.Game}</h1>
      <img className="show-gameimage" src={game.Image} alt={game.Game} />
      <div className="show-details">
        <h3 className="show-gamegenre">Genre: {game.Genre}</h3>
        <p className="show-gamedate">Release Date: {game.ReleaseDate}</p>
        <p className="show-gameplayed">Played On: {game.PlayedOn}</p>
        <p className="show-gamerating">Rating: {game.Rating}</p>
        <p className="show-gameimage">Hours Played: {game.Hours}</p>
        <p className="show-gamepublisher">Publisher: {game.Publisher}</p>
        <div className="show-reviewcontainer">
        <p className="show-gamereview">{game.Review}</p>
        <p className="show-gamenumber">GameScore:  {game.Number}</p>
        </div>
      </div>
    </div>
  );
  
};

export default Show;


