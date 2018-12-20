
export default () => {
  let tripleContent = `<form class="game__content  game__content--triple">`;
  for (let i = 1; i <= 3; ++i) {
    tripleContent += `<div class="game__option"></div>`;
  }
  tripleContent += `</form>`;
  return tripleContent;
};
