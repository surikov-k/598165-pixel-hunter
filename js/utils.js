
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

export const showScreen = (elems) => {
  clearElement(main);
  elems.forEach((it) => {
    main.appendChild(it);
  });
};

export const getRandomFromArray = (array) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};
