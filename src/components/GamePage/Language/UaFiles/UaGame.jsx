import React from 'react';
import css from '../../GamePage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import PhotoContainer from '../PtotoContainer/PhotoContainer';
import UaKeyboard from './UaKeyboard';
import randomUkranianWord from 'Js/SelectWord/Ukraine/ukranianWord';
import { generate } from 'Js/Redux/GenerateWordSlice';
import { reset } from 'Js/Redux/resultSlice';
import { cleanLetters } from 'Js/Redux/SelectLetterSlice';

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
      {resultGame > 4
        ? 'you lose'
        : word && (
            <div className={css.gameContainer}>
              <PhotoContainer result={resultGame} />
              <div className={css.wordSection}>
                {word.split('').map((letter, index) => {
                  if (
                    word.split('').every(item => stateLetter.includes(item))
                  ) {
                    newGameHandler();
                  }
                  if (stateLetter.includes(letter)) {
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
