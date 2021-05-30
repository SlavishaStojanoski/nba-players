import React, { useEffect, useState } from 'react';
import Player from './Player.js';

const Players = () => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    // https://www.balldontlie.io/api/v1/players
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const htmlList = data.map((player, i) => (
          <Player key={i} player={player} />
        ));
        setPlayer(htmlList);
      });
  }, []);

  return (
    <div>{!player ? <div className='loader'></div> : <div>{player}</div>}</div>
  );
};

export default Players;
