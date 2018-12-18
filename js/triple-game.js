import {getElementFromTemlate} from "./utils.js";
import getTripleContent from './triple-content';
import getGameContent from './game-content';
import changeLevel from "./change-level.js";

import {gameStatus} from './start-new-game';
import continueGame from "./continue-game.js";

export default () => {
  const tripleGameTemplate = getGameContent(getTripleContent());

  const tripleGame = getElementFromTemlate(tripleGameTemplate);

  const gameOptions = tripleGame.querySelectorAll(`.game__option`);

  gameOptions.forEach((it, i) => {
    it.addEventListener(`click`, () => {
      gameStatus.playerAnswers = gameStatus.correctAnswers.slice();
      gameStatus.playerAnswers[i] = `paint`;
      changeLevel(gameStatus);
      continueGame();
    });
  });
  return tripleGame;
};
