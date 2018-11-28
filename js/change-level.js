export const INITIAL_STATE = Object.freeze({
  level: 0,
  lives: 3,
  time: 0
});

export default (game, level) => {
  if (level < 0) {
    throw new Error(`Level should not to be a negative number`);
  }
  if (typeof level !== `number`) {
    throw new Error(`Level should be of a type of an number`);
  }
  const newGame = Object.assign({}, game);
  newGame.level = level;
  return newGame;
};
