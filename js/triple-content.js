import {LEVELS} from "./data/data";
import {gameStatus} from './start-new-game';

export default () => `
      <form class="game__content  game__content--triple">
<div class="game__option">
          <img src="${LEVELS[gameStatus.levelType].images()[0]}" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option  game__option--selected">
          <img src="${LEVELS[gameStatus.levelType].images()[0]}" alt="Option 2"  width="304" height="455">
        </div>
        <div class="game__option">
          <img src="${LEVELS[gameStatus.levelType].images()[0]}" alt="Option 3" width="304" height="455">
        </div>
      </form>`;
