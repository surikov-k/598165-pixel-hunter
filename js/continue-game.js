import checkAnswers from './check-answers';
import showNextLevel from './show-next-level';
import stats from './stats';
import showScreen from './show-screen';
import {TOTAL_QUESTIONS, answers} from './data/data';
import {gameStatus} from './start-new-game';

export default () => {
  if (checkAnswers(gameStatus) && gameStatus.levelNumber <= TOTAL_QUESTIONS - 1) {
    showNextLevel();
  } else {
    answers.unshift({stats: gameStatus.stats.slice(), lives: gameStatus.lives});

    showScreen(stats());
  }
};

