export default (game, time) => {
  if (time < 0) {
    throw new Error(`The amount of time can't be a negative number`);
  }
  game.time = time;
  return game;
};
