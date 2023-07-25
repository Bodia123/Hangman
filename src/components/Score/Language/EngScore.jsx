import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from '../Score.module.css';
import { clearScore } from 'Js/Redux/ScoreSlice';

function EngScore() {
  const dispatch = useDispatch();

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
      <button type="button" onClick={() => dispatch(clearScore())}>
        Refresh score...
      </button>
    </div>
  );
}

export default EngScore;
