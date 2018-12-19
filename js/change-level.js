import changeGameType from "./change-game-type";

export default (game) => {
  if (typeof game.levelNumber !== `number`) {
    throw new Error(`Level should be of a type of an number`);
  }
  // const newGame = Object.assign({}, game);
  // newGame.level += 1;

  game.levelNumber += 1;
  game.levelType = changeGameType();
  return game;
};
