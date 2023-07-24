import React from 'react';
import css from '../StartPage.module.css';
import { NavLink } from 'react-router-dom';
import { generate } from 'Js/Redux/GenerateWordSlice';
import { useDispatch } from 'react-redux';
import randomUkranianWord from 'Js/SelectWord/Ukraine/ukranianWord';
import { reset } from 'Js/Redux/resultSlice';
import { cleanLetters } from 'Js/Redux/SelectLetterSlice';
function UaStart() {
  const dispatch = useDispatch();
  const newGameHandler = () => {
    const word = randomUkranianWord();
    dispatch(generate(word));
    dispatch(reset());
    dispatch(cleanLetters());
  };
  return (
    <div className={css.startContainer}>
      <h2 className={css.startTitle}>Гра висельниця</h2>
      <NavLink to={'/game'} className={css.link} onClick={newGameHandler}>
        Почату гру!
      </NavLink>
    </div>
  );
}

export default UaStart;
