import {assert} from 'chai';
import {INITIAL_STATE} from '../data/data';
import changeLevel from '../change-level';

const gameStatus = Object.assign({}, INITIAL_STATE);

describe(`changeLevel`, () => {
  it(`should update the level of the game`, () => {
    assert.equal(changeLevel(gameStatus).levelNumber, 1);
    assert.equal(changeLevel(gameStatus).levelNumber, 2);
    // assert.equal(changeLevel(gameStatus).level, 3);
  });

  // it(`should not allow to set negative values`, () => {
  //   assert.throws(() => changeLevel(INITIAL_STATE, -1), /Level should not to be a negative number/);
  // });

  // it(`should not allow to set non numeric value`, () => {
  //   assert.throws(() => changeLevel(gameStatus, undefined), /Level should be of a type of an number/);
  // });
});
