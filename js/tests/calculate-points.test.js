import {assert} from 'chai';
import calculatePoints from '../calculate-points';

const mockAnswers = (answersNumber) => {
  const answers = [];
  for (let i = 0; i <= answersNumber - 1; ++i) {
    answers[i] = {};
    answers[i].correct = true;
    answers[i].fast = false;
    answers[i].slow = false;
  }
  return answers;
};

describe(`calculatePoints`, () => {
  it(`should return a number`, () => {
    assert.isNumber(calculatePoints([1, 2], 3));
  });

  it(`should not accept anything except an array as the first argument`, () => {
    assert.throws(() => calculatePoints(`string`, 2), /First argument is not an array/);
    assert.doesNotThrow(() => calculatePoints([], 2), /First argument is not an array/);
  });

  it(`should not accept anything except a number as the second argument`, () => {
    assert.throws(() => calculatePoints([], `string`), /Second argument is not a number/);
  });

  it(`should accept the second argument between 1 and 3`, () => {
    assert.throws(() => calculatePoints([], 0), /Number of lives left is not between 1 and 3/);
    assert.throws(() => calculatePoints([], 4), /Number of lives left is not between 1 and 3/);
  });

  it(`should return -1 if number of answers is less than 10`, () => {
    assert.equal(calculatePoints(mockAnswers(3), 3), -1);
  });

  it(`should return 1150 if all questions are answered witn normal pace and 3 lives are left`, () => {
    assert.equal(calculatePoints(mockAnswers(10), 3), 1150);
  });
});
