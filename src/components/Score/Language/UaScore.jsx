import React from 'react';
import { useSelector } from 'react-redux';

function UaScore() {
  const score = useSelector(state => state.score.value);
  const playedGames = useSelector(state => state.score.games);
  return (
    <div>
      Ваш рахунок: {score}
      <br />
      Зігриних ігор: {playedGames}
    </div>
  );
}

export default UaScore;
