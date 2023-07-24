import React from 'react';
import css from '../Header.module.css';
import { NavLink } from 'react-router-dom';
import { change } from 'Js/Redux/langaugeSlice';
import { generate } from 'Js/Redux/GenerateWordSlice';
import { useDispatch } from 'react-redux';
import randomUkranianWord from 'Js/SelectWord/Ukraine/ukranianWord';
import { reset } from 'Js/Redux/resultSlice';
import { cleanLetters } from 'Js/Redux/SelectLetterSlice';

function UaHeader() {
  const dispatch = useDispatch();
  const newGameHandler = () => {
    const word = randomUkranianWord();
    dispatch(generate(word));
    dispatch(reset());
    dispatch(cleanLetters());
  };

  return (
    <header className={css.headerContainer}>
      <nav className={css.linkList}>
        <NavLink to={'/game'} className={css.link} onClick={newGameHandler}>
          Нова гра
        </NavLink>
        <NavLink to={'/rules'} className={css.link}>
          Правила
        </NavLink>
        <NavLink to={'/score'} className={css.link}>
          Рахунок
        </NavLink>
      </nav>
      <button onClick={() => dispatch(change())}>Змінити мову</button>
    </header>
  );
}

export default UaHeader;
