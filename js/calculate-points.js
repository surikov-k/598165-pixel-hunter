
export default (answers, livesLeft) => {
  if (!Array.isArray(answers)) {
    throw new Error(`First argument is not an array`);
  }
  if (!Number.isInteger(livesLeft)) {
    throw new Error(`Second argument is not a number`);
  }

  if (livesLeft < 1 || livesLeft > 3) {
    throw new Error(`Number of lives left is not between 1 and 3`);
  }
  if (answers.length < 10) {
    return -1;
  }
  const pointsCount = answers.reduce((total, it) => {
    return total + it.correct * 100 + it.fast * 50 - it.slow * 50;
  }, 0) + livesLeft * 50;

  return pointsCount;
};
