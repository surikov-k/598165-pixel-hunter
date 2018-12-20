import {getElementFromTemlate} from "./utils.js";
import showScreen from './show-screen';
import greeting from "./greeting.js";

const template = ` <section class="intro">
      <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </section>`;
const intro = getElementFromTemlate(template);
const introAsterisk = intro.querySelector(`.intro__asterisk`);
introAsterisk.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  showScreen(greeting);
});
export default intro;
