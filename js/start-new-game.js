import {INITIAL_STATE} from './data/data';
import changeGameType from './change-game-type';

export let gameStatus;


export const startNewGame = () => {
  gameStatus = Object.assign({}, INITIAL_STATE);
  gameStatus.levelType = changeGameType();
  gameStatus.stats.length = 0;
};
