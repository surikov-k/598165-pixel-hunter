export default (game) => {
  if (game.lives - 1 < 0) {
    throw new Error(`Player has died`);
  }
  game.lives -= 1;
  return game;
};
