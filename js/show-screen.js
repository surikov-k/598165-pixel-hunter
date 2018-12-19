const main = document.querySelector(`#main`);

const clearElement = (it) => {
  while (it.hasChildNodes()) {
    it.removeChild(it.lastChild);
  }
};

export default (elems) => {
  clearElement(main);
  elems.forEach((it) => {
    main.appendChild(it);
  });
};
