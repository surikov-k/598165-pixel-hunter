import {assert} from 'chai';
import {INITIAL_STATE} from '../change-level';
import changeLevel from '../change-level';

describe(`changeLevel`, () => {
  it(`should update the level of the game`, () => {
    assert.equal(changeLevel(INITIAL_STATE, 1).level, 1);
    assert.equal(changeLevel(INITIAL_STATE, 10).level, 10);
    assert.equal(changeLevel(INITIAL_STATE, 100).level, 100);
  });

  it(`should not allow to set negative values`, () => {
    assert.throws(() => changeLevel(INITIAL_STATE, -1), /Level should not to be a negative number/);
  });

  it(`should not allow to set non numeric value`, () => {
    assert.throws(() => changeLevel(INITIAL_STATE, undefined), /Level should be of a type of an number/);
  });
});
