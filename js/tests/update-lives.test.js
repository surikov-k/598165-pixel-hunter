import {assert} from 'chai';

import {INITIAL_STATE} from '../change-level';
import updateLives from '../update-lives';

const game = Object.assign({}, INITIAL_STATE);

describe(`updateLives`, () => {
  it(`should return an object`, () => {
    assert.isObject(updateLives(game, 3));
  });

  it(`should correctly set the lives count`, () =>{
    assert.equal(updateLives(game, 1).lives, 1);
    assert.equal(updateLives(game, 0).lives, 0);
    assert.equal(updateLives(game, 3).lives, 3);
  });

  it(`shouldn't allow to set a negative number to the lives counter`, () => {
    assert.throws(() => updateLives(game, -1), /The quantity of lives can't be a negative number/);
  });
});
