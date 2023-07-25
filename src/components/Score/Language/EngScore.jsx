import React from 'react';
import { useSelector } from 'react-redux';

function EngScore() {
  const score = useSelector(state => state.score.value);
  const playedGames = useSelector(state => state.score.games);
  return (
    <div>
      Your score: {score}
      <br />
      Played game: {playedGames}
    </div>
  );
}

export default EngScore;
