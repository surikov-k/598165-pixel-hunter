import {assert} from 'chai';
import calculatePoints from '../calculate-points';
import {TOTAL_QUESTIONS} from '../data/data';

let answersExmpl = [];

describe(`calculatePoints`, () => {

  it(`should not accept anything except an array as the first argument`, () => {
    assert.throws(() => calculatePoints(`string`, 2), /First argument is not an array/);
    assert.doesNotThrow(() => calculatePoints([], 2), /First argument is not an array/);
  });

  it(`should not accept anything except a number as the second argument`, () => {
    assert.throws(() => calculatePoints([], `string`), /Second argument is not a number/);
  });

  it(`should return -1 if number of answers is less than ${TOTAL_QUESTIONS}`, () => {
    answersExmpl = [`correct`, `correct`, `correct`];
    assert.equal(calculatePoints(answersExmpl, 3), -1);
  });

  it(`should return -1 if number of lives is less than 0`, () => {
    assert.equal(calculatePoints(answersExmpl, -1), -1);
  });

  it(`should return 1150 if 10 questions are answered witn normal pace and 3 lives are left`, () => {
    answersExmpl = [
      `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`
    ];
    assert.equal(calculatePoints(answersExmpl, 3).total, 1150);
  });

  it(`should return 1650 if 10 questions are answered witn high pace and 3 lives are left`, () => {
    answersExmpl = [
      `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`
    ];
    assert.equal(calculatePoints(answersExmpl, 3).total, 1650);
  });

  it(`should return 350 if 7 questions are answered witn slow pace and 0 lives left`, () => {
    answersExmpl = [
      `slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `wrong`, `wrong`, `wrong`
    ];
    assert.equal(calculatePoints(answersExmpl, 0).total, 350);
  });
});
