export default (questionNumber) => `<label class="game__answer game__answer--photo">
            <input class="visually-hidden" name="question${questionNumber}" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input class="visually-hidden" name="question${questionNumber}" type="radio" value="paint">
            <span>Рисунок</span>
          </label>`;
