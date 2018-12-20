import {LEVELS} from "./data/game-types";
import {gameStatus} from './start-new-game';
import showScreen from './show-screen';
import getHeader from "./header";

export default () => {
  const nextGame = LEVELS[gameStatus.levelType].game;
  showScreen(getHeader(), nextGame());
};
