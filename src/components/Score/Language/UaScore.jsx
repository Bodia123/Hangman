import React from 'react';
import { useSelector } from 'react-redux';
import css from '../Score.module.css';
function UaScore() {
  const score = useSelector(state => state.score.value);
  const playedGames = useSelector(state => state.score.games);
  return (
    <div className={css.scoreContainer}>
      <p>
        Ваш рахунок: <span>{score}</span>
      </p>
      <br />
      <p>
        Зігриних ігор: <span>{playedGames}</span>
      </p>
    </div>
  );
}

export default UaScore;
