import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../Assets/Styles/index.css";

const Index = ({ game }) => {
  const [gameData, setGameData] = useState(null);
  

  useEffect(() => {
    // Fetch game data from Mongo
    fetch('http://localhost:4000/collection')
      .then((response) => response.json())
      .then((data) => setGameData(data))
      .catch((error) => console.log(error));
  }, []);

  const loaded = () => {
    console.log(game); // Add this line to log the game variable

    return gameData.map((gameItem) => (
      <div key={gameItem._id} className="post">
        <Link to={`/collection/${gameItem._id}`}>
          <h1 className="gametitle">{gameItem.Game}</h1>
        </Link>
        <img className="game-image"src={gameItem.Image} alt={gameItem.Game} />
        <h3>{gameItem.Genre}</h3>
      </div>
    ));
  };




  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      {gameData ? loaded() : loading()}
    </section>
  );
};

export default Index;