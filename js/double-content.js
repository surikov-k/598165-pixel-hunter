import placeAnswerPart from './answer-part';
import {LEVELS} from './data/data';
import {gameStatus} from './start-new-game';


export default () => `<div class="game__option">
          <img src="${LEVELS[gameStatus.levelType].images()[0]}" alt="Option 1" width="468" height="458">
          ${placeAnswerPart(1)}
        </div>
        <div class="game__option">
          <img src="${LEVELS[gameStatus.levelType].images()[0]}" alt="Option 2"  width="468" height="458">
          ${placeAnswerPart(2)}
        </div>`;
