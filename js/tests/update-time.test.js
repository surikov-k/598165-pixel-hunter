import {assert} from 'chai';

import {INITIAL_STATE} from '../data/data';
import updateTime from '../update-time.js';

const game = Object.assign({}, INITIAL_STATE);

describe(`updateTimer`, () => {
  it(`should return an object`, () => {
    assert.isObject(updateTime(game, 100));
  });

  it(`should correctly set the time value`, () => {
    assert.equal(updateTime(game, 1).time, 1);
    assert.equal(updateTime(game, 0).time, 0);
    assert.equal(updateTime(game, 100).time, 100);
  });

  it(`shouldn't allow to set a negative number to the time counter`, () => {
    assert.throws(() => updateTime(game, -1), /The amount of time can't be a negative number/);
  });
});
