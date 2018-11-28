export default (game, lives) => {
  if (lives < 0) {
    throw new Error(`The quantity of lives can't be a negative number`);
  }
  game.lives = lives;
  return game;
};
