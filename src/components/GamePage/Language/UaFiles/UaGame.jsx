import React from 'react';
import css from '../../GamePage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import PhotoContainer from '../PtotoContainer/PhotoContainer';
import UaKeyboard from './UaKeyboard';
import randomUkranianWord from 'Js/SelectWord/Ukraine/ukranianWord';
import { generate } from 'Js/Redux/GenerateWordSlice';
import { reset } from 'Js/Redux/resultSlice';
import { changeLetter, cleanLetters } from 'Js/Redux/SelectLetterSlice';
import { win, lose } from 'Js/Redux/ScoreSlice';

function UaGame() {
  const dispatch = useDispatch();

  const stateLetter = useSelector(state => state.letter.value);
  const resultGame = useSelector(state => state.result.value);
  const word = useSelector(state => state.word.value);

  const newGameHandler = () => {
    const newWord = randomUkranianWord();
    dispatch(generate(newWord));
    dispatch(reset());
    dispatch(cleanLetters());
  };

  return (
    <>
      {resultGame > 4 ? (
        <div className={css.loseContainer}>
          <p className={css.loseText}>Ви програли!!!</p>
          <button
            type="button"
            onClick={() => {
              dispatch(lose());
              newGameHandler();
            }}
          >
            Зіграти знову!
          </button>
        </div>
      ) : resultGame <= 4 &&
        word.split('').every(item => stateLetter.includes(item)) ? (
        <div className={css.winnerContainer}>
          <p className={css.winnerText}>Вітаю, ви перемогли!!!</p>
          <button
            type="button"
            onClick={() => {
              dispatch(win());
              newGameHandler();
            }}
          >
            Зіграти знову!
          </button>
        </div>
      ) : (
        <div className={css.gameContainer}>
          <PhotoContainer result={resultGame} />
          <div className={css.wordSection}>
            {word.split('').map((letter, index) => {
              if (stateLetter.includes(letter)) {
                return (
                  <div key={index} className={css.forGame}>
                    {letter}
                  </div>
                );
              }
              if (index === 0) {
                dispatch(changeLetter(letter));
                return (
                  <div key={index} className={css.forGame}>
                    {letter}
                  </div>
                );
              }
              if (index === word.split('').length - 1) {
                dispatch(changeLetter(letter));

                return (
                  <div key={index} className={css.forGame}>
                    {letter}
                  </div>
                );
              }
              return (
                <div key={index} className={css.forGame}>
                  _
                </div>
              );
            })}
          </div>
          <UaKeyboard gameWord={word} />
        </div>
      )}
    </>
  );
}

export default UaGame;
