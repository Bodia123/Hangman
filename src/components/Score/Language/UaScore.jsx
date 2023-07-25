import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from '../Score.module.css';
import { clearScore } from 'Js/Redux/ScoreSlice';
function UaScore() {
  const dispatch = useDispatch();
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
      <button type="button" onClick={() => dispatch(clearScore())}>
        Обнулити рахунок
      </button>
    </div>
  );
}

export default UaScore;
