import React from 'react';
import { useSelector } from 'react-redux';
import css from '../Score.module.css';

function EngScore() {
  const score = useSelector(state => state.score.value);
  const playedGames = useSelector(state => state.score.games);
  return (
    <div className={css.scoreContainer}>
      <p>
        Your score: <span>{score}</span>
      </p>
      <br />
      <p>
        Played game: <span>{playedGames}</span>
      </p>
    </div>
  );
}

export default EngScore;
