import placeAnswerPart from './answer-part';
import {LEVELS} from './data/data';
import {gameStatus} from './start-new-game';

export default () => `
  <form class="game__content game__content--wide"><div class="game__option">
          <img src="${LEVELS[gameStatus.levelType].images()}" alt="Option 1"  width="705" height="455">
          ${placeAnswerPart(1)}
        </div></form>`;
