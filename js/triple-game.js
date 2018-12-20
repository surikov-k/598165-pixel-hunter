import {getElementFromTemlate} from "./utils.js";
import getTripleContent from './triple-content';
import getGameContent from './game-content';
import changeLevel from "./change-level.js";

import {gameStatus} from './start-new-game';
import continueGame from "./continue-game.js";
import changeGameType from "./change-game-type";
import insertImage from './insert-image';
import {LEVELS} from './data/game-types';


export default () => {
  const tripleGameTemplate = getGameContent(getTripleContent());
  const tripleGame = getElementFromTemlate(tripleGameTemplate);
  const gameOptions = tripleGame.querySelectorAll(`.game__option`);
  const images = LEVELS[gameStatus.levelType].images();

  gameOptions.forEach((it, i) => {
    insertImage(it, images[i], i);
    it.addEventListener(`click`, () => {
      gameStatus.playerAnswers = gameStatus.correctAnswers.slice();
      gameStatus.playerAnswers[i] = `paint`;
      changeLevel(gameStatus);
      gameStatus.levelType = changeGameType();
      continueGame();
    });
  });
  return tripleGame;
};
