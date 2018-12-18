import {assert} from 'chai';

import {INITIAL_STATE, TOTAL_LIVES} from '../data/data';
import die from '../update-lives';

let game;

describe(`updateLives`, () => {
  game = Object.assign({}, INITIAL_STATE);
  it(`should return an object`, () => {
    assert.isObject(die(game));
  });

  it(`should correctly set the lives count`, () => {
    game = Object.assign({}, INITIAL_STATE);
    assert.equal(die(game).lives, TOTAL_LIVES - 1);
  });

  it(`shouldn't allow to set a negative number to the lives counter`, () => {
    game.lives = 0;
    assert.throws(() => die(game), /Player has died/);
  });
});
