import levelStatistc from './level-statistic';
import {LEVELS} from "./data/game-types";
import {gameStatus} from './start-new-game';

export default (gameContent) => {

  const gameTemplate =
    `<section class="game">
      <p class="game__task">${LEVELS[gameStatus.levelType].task}</p>

        ${gameContent}

  ${levelStatistc(gameStatus.stats)}
    </section>`;

  return gameTemplate;
};
