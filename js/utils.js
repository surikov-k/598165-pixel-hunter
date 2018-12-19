export const getElementFromTemlate = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();
  return wrapper;
};

export const getRandomFromArray = (array) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};
