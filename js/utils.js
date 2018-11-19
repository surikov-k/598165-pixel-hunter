
const main = document.querySelector(`#main`);

const clearElement = (it) => {
  while (it.hasChildNodes()) {
    it.removeChild(it.lastChild);
  }
};

export const getElementFromTemlate = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();
  return wrapper;
};

export const showScreen = (screen) => {
  clearElement(main);
  main.appendChild(screen);
};

// export const goToScreen = (screen) => {
//   const backButton = document.querySelector(`.back`);
//   backButton.addEventListener(`click`, () => {
//     showScreen(screen);
//   });
// };
