import React from 'react';
import css from '../Header.module.css';
import { NavLink } from 'react-router-dom';
import { change } from 'Js/Redux/langaugeSlice';
import { generate } from 'Js/Redux/GenerateWordSlice';
import { useDispatch } from 'react-redux';
import randomEnglishWord from 'Js/SelectWord/English/englishWords';

function EngHeader() {
  const dispatch = useDispatch();
  const newGameHandler = () => {
    const word = randomEnglishWord();
    dispatch(generate(word));
  };
  return (
    <header className={css.headerContainer}>
      <nav className={css.linkList}>
        <NavLink to={'/game'} className={css.link} onClick={newGameHandler}>
          New Game
        </NavLink>
        <NavLink to={'/rules'} className={css.link}>
          Rules
        </NavLink>
        <NavLink to={'/score'} className={css.link}>
          Score
        </NavLink>
      </nav>
      <button onClick={() => dispatch(change())}>Change language</button>
    </header>
  );
}

export default EngHeader;
