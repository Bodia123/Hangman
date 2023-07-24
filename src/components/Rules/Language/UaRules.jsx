import React from 'react';
import css from '../Rules.module.css';

function UaRules() {
  return (
    <div className={css.rulesPage}>
      <p className={css.rulesTitle}>Правила для гри шибениця</p>
      <ol className={css.rulesList}>
        <li className={css.rulesItem}>
          Під час запуску гри - генерується слово.
        </li>
        <li className={css.rulesItem}>Генеруються місця для букв.</li>
        <li className={css.rulesItem}>
          Кільсість місць = кількість букв загаданого слова.
        </li>
        <li className={css.rulesItem}>
          Кожного разу, коли Ви не відгадуєте букву - домальовується елемент
          шибениці.
        </li>
        <li className={css.rulesItem}>
          Коли шибениця домальована - ви програли.
        </li>
        <li className={css.rulesItem}>
          Якщо ви відгадали всі букви - вітаю, ви перемогли!
        </li>
      </ol>
    </div>
  );
}

export default UaRules;
