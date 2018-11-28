export const TOTAL_QUESTIONS = 10;
export const TOTAL_LIVES = 3;
const CORRECT_POINTS = 100;
const FAST_BONUS = 50;
const LIVES_BONUS = 50;
const SLOW_PENALTY = 50;

export default (answers, livesLeft) => {
  if (!Array.isArray(answers)) {
    throw new Error(`First argument is not an array`);
  }
  if (!Number.isInteger(livesLeft)) {
    throw new Error(`Second argument is not a number`);
  }

  if (livesLeft < 0 || livesLeft > TOTAL_LIVES) {
    throw new Error(`Number of lives left is not between 0 and ${TOTAL_LIVES}`);
  }
  if (answers.length < TOTAL_QUESTIONS) {
    return -1;
  }
  const pointsCount = answers.reduce((total, it) => {
    const forCorrectAnswer = it.correct ? CORRECT_POINTS : 0;
    const forFastAnswer = it.fast ? FAST_BONUS : 0;
    const forSlowAnswer = it.slow ? SLOW_PENALTY : 0;
    return total + forCorrectAnswer + forFastAnswer - forSlowAnswer;
  }, 0) + livesLeft * LIVES_BONUS;

  return pointsCount;
};
