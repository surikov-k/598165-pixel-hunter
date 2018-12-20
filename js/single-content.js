import placeAnswerPart from './answer-part';

export default () => {

  return `<form class="game__content game__content--wide">
    <div class="game__option">
      ${placeAnswerPart(1)}
    </div>
  </form>`;

};


