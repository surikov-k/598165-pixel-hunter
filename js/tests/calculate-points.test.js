import {assert} from 'chai';
import calculatePoints from '../calculate-points';
import {TOTAL_LIVES} from '../data/data';

let answersExmpl = [];

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

  it(`should accept the second argument between 0 and ${TOTAL_LIVES}`, () => {
    assert.throws(() => calculatePoints([], -1), `Number of lives left is not between 0 and ${TOTAL_LIVES}`);
    assert.throws(() => calculatePoints([], 6), `Number of lives left is not between 0 and ${TOTAL_LIVES}`);
  });

  // it(`should return -1 if number of answers is less than ${TOTAL_QUESTIONS}`, () => {
  //   answers = [
  //     {correct: true, fast: false, slow: false},
  //     {correct: true, fast: false, slow: false},
  //     {correct: true, fast: false, slow: false}
  //   ];
  //   assert.equal(calculatePoints(answers, 3), -1);
  // });

  it(`should return 1150 if 10 questions are answered witn normal pace and 3 lives are left`, () => {
    answersExmpl = [
      {correct: true, fast: false, slow: false},
      {correct: true, fast: false, slow: false},
      {correct: true, fast: false, slow: false},
      {correct: true, fast: false, slow: false},
      {correct: true, fast: false, slow: false},
      {correct: true, fast: false, slow: false},
      {correct: true, fast: false, slow: false},
      {correct: true, fast: false, slow: false},
      {correct: true, fast: false, slow: false},
      {correct: true, fast: false, slow: false}
    ];
    assert.equal(calculatePoints(answersExmpl, 3), 1150);
  });

  it(`should return 1650 if 10 questions are answered witn high pace and 3 lives are left`, () => {
    answersExmpl = [
      {correct: true, fast: true, slow: false},
      {correct: true, fast: true, slow: false},
      {correct: true, fast: true, slow: false},
      {correct: true, fast: true, slow: false},
      {correct: true, fast: true, slow: false},
      {correct: true, fast: true, slow: false},
      {correct: true, fast: true, slow: false},
      {correct: true, fast: true, slow: false},
      {correct: true, fast: true, slow: false},
      {correct: true, fast: true, slow: false}
    ];
    assert.equal(calculatePoints(answersExmpl, 3), 1650);
  });

  it(`should return 200 if 7 questions are answered witn low pace and 3 lives are lost`, () => {
    answersExmpl = [
      {correct: false, fast: false, slow: true},
      {correct: false, fast: false, slow: true},
      {correct: false, fast: false, slow: true},
      {correct: true, fast: false, slow: true},
      {correct: true, fast: false, slow: true},
      {correct: true, fast: false, slow: true},
      {correct: true, fast: false, slow: true},
      {correct: true, fast: false, slow: true},
      {correct: true, fast: false, slow: true},
      {correct: true, fast: false, slow: true}
    ];
    assert.equal(calculatePoints(answersExmpl, 0), 200);
  });
});
