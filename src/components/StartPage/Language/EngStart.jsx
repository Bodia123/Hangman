import React from 'react';
import css from '../StartPage.module.css';
import { NavLink } from 'react-router-dom';
import { generate } from 'Js/Redux/GenerateWordSlice';
import { useDispatch } from 'react-redux';
import { reset } from 'Js/Redux/resultSlice';
import { cleanLetters } from 'Js/Redux/SelectLetterSlice';
import randomEnglishWord from 'Js/SelectWord/English/englishWords';
function EngStart() {
  const dispatch = useDispatch();
  const newGameHandler = () => {
    const word = randomEnglishWord();
    dispatch(generate(word));
    dispatch(reset());
    dispatch(cleanLetters());
  };
  return (
    <div className={css.startContainer}>
      <h2 className={css.startTitle}>Hangman game</h2>
      <NavLink to={'/game'} className={css.link} onClick={newGameHandler}>
        Start game!
      </NavLink>
    </div>
  );
}

export default EngStart;
