import {TOTAL_QUESTIONS, CORRECT_POINTS, FAST_BONUS, SLOW_PENALTY, LIVES_BONUS} from './data/data';

export default (game, lives) => {
  const result = {};
  if (!Array.isArray(game)) {
    throw new Error(`First argument is not an array`);
  }
  if (!Number.isInteger(lives)) {
    throw new Error(`Second argument is not a number`);
  }

  if (game.length < TOTAL_QUESTIONS || lives < 0) {
    return -1;
  }
  result.total = game.reduce((total, it) => {
    let points = 0;
    switch (it) {
      case `correct`:
        points = CORRECT_POINTS;
        break;
      case `fast`:
        points = CORRECT_POINTS + FAST_BONUS;
        break;
      case `slow`:
        points = CORRECT_POINTS - SLOW_PENALTY;
        break;
    }
    return total + points;
  }, 0) + lives * LIVES_BONUS;

  result.correct = game.reduce((acc, it) => {
    if (it === `wrong` || it === undefined) {
      return acc;
    }
    return acc + 1;
  }, 0);

  result.fast = game.reduce((acc, it) => {
    return it === `fast` ? ++acc : acc;
  }, 0);

  result.slow = game.reduce((acc, it) => {
    return it === `slow` ? ++acc : acc;
  }, 0);

  return result;
};
