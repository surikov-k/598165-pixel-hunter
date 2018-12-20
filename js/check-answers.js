import die from './update-lives';
import {getRandomFromArray} from './utils';

export default (game) => {

  if (game.correctAnswers.join() !== game.playerAnswers.join()) {
    game.stats.push(`wrong`);
    try {
      die(game);
    } catch (error) {
      return false;
    }
  } else {
    const results = [`correct`, `fast`, `slow`];
    game.stats.push(getRandomFromArray(results));
  }
  game.correctAnswers.length = 0;
  game.playerAnswers.length = 0;
  return true;
};
