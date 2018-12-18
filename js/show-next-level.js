import {LEVELS} from "./data/data";
import {gameStatus} from './start-new-game';
import {showScreen} from "./utils";
import getHeader from "./header";
import singleGame from "./single-game";
import doubleGame from "./double-game";
import tripleGame from "./triple-game";

export default () => {
  let nextGame;

  switch (LEVELS[gameStatus.levelType].name) {
    case `single`:
      nextGame = singleGame();
      break;
    case `double`:
      nextGame = doubleGame();
      break;
    case `triple`:
      nextGame = tripleGame();
  }

  showScreen([getHeader(), nextGame]);
};
