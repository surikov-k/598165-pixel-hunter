import {TOTAL_QUESTIONS} from "./data/data";

export default (stats) => {

  let listItemsTemplate = ``;

  for (let i = 0; i <= TOTAL_QUESTIONS - 1; ++i) {
    if (stats[i] === undefined) {
      listItemsTemplate = listItemsTemplate + `<li class="stats__result stats__result--unknown">`;
    } else {
      listItemsTemplate += `<li class="stats__result stats__result--${stats[i]}">`;
    }
  }
  const statsTemplate = `<ul class="stats">${listItemsTemplate}</ul>`;
  return statsTemplate;
};

