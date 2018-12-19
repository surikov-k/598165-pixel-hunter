import {getElementFromTemlate} from "./utils.js";
import showScreen from './show-screen';
import greeting from "./greeting.js";
import {answers} from "./data/data.js";
import levelStatistc from './level-statistic';
import calculatePoints from "./calculate-points.js";
import {CORRECT_POINTS, FAST_BONUS, SLOW_PENALTY, LIVES_BONUS} from './data/data';

export default () => {

  const lastGameResult = calculatePoints(answers[0].stats, answers[0].lives);

  const message = lastGameResult !== -1 ? `Победа !` : `Поражение (`;

  let finalStatsTemplate = `<header class="header">
      <button class="back">
        <span class="visually-hidden">Вернуться к началу</span>
        <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
          <use xlink:href="img/sprite.svg#arrow-left"></use>
        </svg>
        <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
          <use xlink:href="img/sprite.svg#logo-small"></use>
        </svg>
      </button>
    </header>
    <section class="result">
      <h2 class="result__title">${message}</h2>
      `;


  answers.forEach((it, i) => {
    const gameResult = calculatePoints(it.stats, it.lives);
    const finalStatsData = {
      result: `<td class="result__total  result__total--final">fail</td>`,
      fast: ``,
      slow: ``,
      lives: ``,
      total: ``
    };

    if (gameResult !== -1) {
      finalStatsData.result = `<td class="result__total">${gameResult.correct * CORRECT_POINTS}</td>`;

      if (gameResult.fast) {
        finalStatsData.fast = `<tr>
      <td></td>
      <td class="result__extra">Бонус за скорость:</td>
      <td class="result__extra">${gameResult.fast} <span class="stats__result stats__result--fast"></span></td>
      <td class="result__points">× 50</td>
      <td class="result__total">${gameResult.fast * FAST_BONUS}</td>
    </tr>`;
      }

      if (it.lives > 0) {
        finalStatsData.lives = `<tr>
      <td></td>
      <td class="result__extra">Бонус за жизни:</td>
      <td class="result__extra">${it.lives}<span class="stats__result stats__result--alive"></span></td>
      <td class="result__points">× 50</td>
      <td class="result__total">${it.lives * LIVES_BONUS}</td>
    </tr>`;
      }

      if (gameResult.slow) {
        finalStatsData.slow = `<tr>
      <td></td>
      <td class="result__extra">Штраф за медлительность:</td>
      <td class="result__extra">${gameResult.slow}<span class="stats__result stats__result--slow"></span></td>
      <td class="result__points">× 50</td>
      <td class="result__total">-${gameResult.slow * SLOW_PENALTY}</td>
    </tr>`;
      }

      finalStatsData.total = `<tr>
      <td colspan="5" class="result__total  result__total--final">${gameResult.total}</td>
    </tr>`;
    }

    finalStatsTemplate += `<table class="result__table"><tr><td class="result__number">${i + 1}.</td>
          <td colspan="2">
            ${levelStatistc(it.stats)}
          </td>
          <td class="result__points">× 100</td>
          ${finalStatsData.result}
        </tr>
        ${finalStatsData.fast}
        ${finalStatsData.lives}
        ${finalStatsData.slow}
        ${finalStatsData.total}


      </table>`;
  });
  finalStatsTemplate += `</section>`;

  const stats = getElementFromTemlate(finalStatsTemplate);

  stats.querySelector(`.back`).addEventListener(`click`, () => {
    showScreen([greeting]);
  });
  return stats;
};
