import placeAnswerPart from './answer-part';
import {LEVELS} from './data/data';
import {gameStatus} from './start-new-game';


export default () => {
  const images = LEVELS[gameStatus.levelType].images();
  let doubleContent = `<form class="game__content">`;
  for (let i = 0; i <= images.length - 1; ++i) {
    doubleContent += `<div class="game__option">
          <img src="${images[i]}" alt="Option ${i + 1}" width="468" height="458">
          ${placeAnswerPart(i + 1)}
        </div>`;
  }
  doubleContent += `</form>`;
  return doubleContent;
};
