import React from 'react';
import css from '../../GamePage.module.css';
import { useDispatch } from 'react-redux';
import { change } from 'Js/Redux/resultSlice';
import { changeLetter } from 'Js/Redux/SelectLetterSlice';
function UaKeyboard({ gameWord }) {
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
              Й
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              Ц
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              У
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              К
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              Е
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              Н
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              Г
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              Ш
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              Щ
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              З
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              Х
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              Ї
            </li>
            <br />
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              Ф
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              І
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              В
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              А
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              П
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              Р
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              О
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              Л
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              Д
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              Ж
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              Є
            </li>
            <br />
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              Я
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              Ч
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              С
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              М
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              И
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              Т
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              Ь
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              Б
            </li>
            <li className="nonActiveLetter" onClick={letterHandleClick}>
              Ю
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default UaKeyboard;
