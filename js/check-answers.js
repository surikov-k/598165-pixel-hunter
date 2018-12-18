import die from './update-lives';

export default (game) => {
  if (game.correctAnswers.join() !== game.playerAnswers.join()) {
    game.stats.push(`wrong`);
    try {
      die(game);
    } catch (error) {
      return false;
    }
  } else {
    game.stats.push(`correct`);
  }
  game.correctAnswers.length = 0;
  game.playerAnswers.length = 0;
  return true;
};
