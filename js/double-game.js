import getDoubleContent from './double-content';
import getGameContent from './game-content';
import {getElementFromTemlate} from "./utils.js";
import changeLevel from './change-level';
import continueGame from './continue-game';
import {gameStatus} from './start-new-game';


export default () => {
  const doubleGameTemplate = getGameContent(getDoubleContent());
  const doubleGame = getElementFromTemlate(doubleGameTemplate);
  const gameInputs = doubleGame.querySelectorAll(`input[type="radio"]`);

  const levelStatus = {
    question1: false,
    question2: false
  };

  const resetInputs = () => {
    gameInputs.forEach((it) => {
      it.checked = false;
    });
    levelStatus.question1 = false;
    levelStatus.question2 = false;
  };

  gameInputs.forEach((it) => {
    it.addEventListener(`change`, (evt) => {
      levelStatus[evt.target.name] = true;

      if (evt.target.name === `question1`) {
        gameStatus.playerAnswers[0] = evt.target.value;
      }
      if (evt.target.name === `question2`) {
        gameStatus.playerAnswers[1] = evt.target.value;
      }

      if (levelStatus.question1 && levelStatus.question2) {
        resetInputs();
        changeLevel(gameStatus);
        continueGame();
      }
    });
  });
  return doubleGame;
};

