import React from 'react';
import css from '../Rules.module.css';

function EngRules() {
  return (
    <div className={css.rulesPage}>
      <p className={css.rulesTitle}>Rules for the Hangman game</p>
      <ol className={css.rulesList}>
        <li className={css.rulesItem}>
          When starting the game - a word is generated.
        </li>
        <li className={css.rulesItem}>Spaces for letters are generated.</li>
        <li className={css.rulesItem}>
          Number of places = number of letters of the puzzled word.
        </li>
        <li className={css.rulesItem}>
          Each time you do not guess a letter - an element of the gallows is
          drawn.
        </li>
        <li className={css.rulesItem}>
          When the gallows is finished - you lost this game.
        </li>
        <li className={css.rulesItem}>
          If you guessed all the letters - congratulations, you won!
        </li>
      </ol>
    </div>
  );
}

export default EngRules;
