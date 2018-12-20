import placeAnswerPart from './answer-part';

export default () => {
  let doubleContent = `<form class="game__content">`;
  for (let i = 1; i <= 2; ++i) {
    doubleContent += `<div class="game__option">
          ${placeAnswerPart(i)}
        </div>`;
  }
  doubleContent += `</form>`;
  return doubleContent;
};
