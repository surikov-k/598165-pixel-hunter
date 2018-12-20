import getGameContent from './game-content';
import getSingleContent from './single-content';
import {getElementFromTemlate} from './utils';
import changeLevel from './change-level';
import {gameStatus} from './start-new-game';
import continueGame from './continue-game';


export default () => {
  const singleGameTemplate = getGameContent(getSingleContent());
  const singleGame = getElementFromTemlate(singleGameTemplate);
  const gameInputs = singleGame.querySelectorAll(`input[type="radio"]`);

  const resetInputs = () => {
    gameInputs.forEach((it) => {
      it.checked = false;
    });
  };

  gameInputs.forEach((it) => {
    it.addEventListener(`click`, (evt) => {
      gameStatus.playerAnswers.push(evt.target.value);
      resetInputs();
      changeLevel(gameStatus);
      continueGame();
    });
  });
  return singleGame;
};
