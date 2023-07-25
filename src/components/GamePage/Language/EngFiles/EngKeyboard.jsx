import React from 'react';
import css from '../../GamePage.module.css';
import { useDispatch } from 'react-redux';
import { change } from 'Js/Redux/resultSlice';
import { changeLetter } from 'Js/Redux/SelectLetterSlice';
function EngKeyboard({ gameWord }) {
  const dispatch = useDispatch();

  const letterHandleClick = e => {
    const wordArr = gameWord.toUpperCase().split('');
    const currentLetter = e.currentTarget.textContent;
    e.currentTarget.className = 'activeLetter';

    if (!wordArr.includes(currentLetter)) {
      dispatch(change());
      return;
    }

    dispatch(changeLetter(currentLetter));
  };
  return (
    <>
      {gameWord && (
        <div className={css.keyboardSection}>
          <ul className={css.letterList}>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              Q
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              W
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              E
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              R
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              T
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              Y
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              U
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              I
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              O
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              P
            </li>
            <br />
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              A
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              S
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              D
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              F
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              G
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              H
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              J
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              K
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              L
            </li>

            <br />
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              Z
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              X
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              C
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              V
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              B
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              N
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              M
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default EngKeyboard;
