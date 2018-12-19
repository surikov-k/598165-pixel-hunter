import levelStatistc from './level-statistic';
import {LEVELS} from './data/data';
import {gameStatus} from './start-new-game';

export default (gameContent) => {

  const gameTemplate =
    `<section class="game">
      <p class="game__task">${LEVELS[gameStatus.levelType].task}</p>
      <form class="game__content">
        ${gameContent}
      </form>
  ${levelStatistc(gameStatus.stats)}
    </section>`;

  return gameTemplate;
};
