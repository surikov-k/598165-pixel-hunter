import {LEVELS} from "./data/data";
import {gameStatus} from './start-new-game';

export default () => {
  const images = LEVELS[gameStatus.levelType].images();
  let tripleContent = `<form class="game__content  game__content--triple">`;
  for (let i = 0; i <= images.length - 1; ++i) {
    tripleContent += `<div class="game__option">
          <img src="${images[i]}" alt="Option ${i + 1}" width="304" height="455">
        </div>`;
  }
  tripleContent += `</form>`;
  return tripleContent;
};
