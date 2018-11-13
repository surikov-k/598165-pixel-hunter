'use strict';

(function () {

  const LEFT_ARROW = 37;
  const RIGHT_ARROW = 39;

  const inReverse = -1;
  // const toTheRight = 1;

  let currentScreen = 0;

  const main = document.querySelector(`#main`);

  const screens = [];
  screens.push(document.querySelector(`#intro`));
  screens.push(document.querySelector(`#greeting`));
  screens.push(document.querySelector(`#rules`));
  screens.push(document.querySelector(`#game-1`));
  screens.push(document.querySelector(`#game-2`));
  screens.push(document.querySelector(`#game-3`));
  screens.push(document.querySelector(`#stats`));

  const warp = ((it) => {
    const shadow = document.createElement(`div`);
    const content = it.content.cloneNode(true);
    shadow.appendChild(content);
    return shadow.cloneNode(true);
  });

  const clearElement = (it) => {
    while (it.hasChildNodes()) {
      it.removeChild(it.lastChild);
    }
  };

  const showScreen = (screenNumber) => {
    clearElement(main);
    main.appendChild(warp(screens[screenNumber]));
  };

  const nextScreen = (direction = 1) => {
    currentScreen = currentScreen + direction;
    if (currentScreen > screens.length - 1) {
      currentScreen = 0;
    }
    if (currentScreen < 0) {
      currentScreen = screens.length - 1;
    }
    showScreen(currentScreen);
  };

  showScreen(currentScreen);

  document.addEventListener(`keydown`, (evt) => {
    if (evt.keyCode === LEFT_ARROW) {
      nextScreen(inReverse);
    }
    if (evt.keyCode === RIGHT_ARROW) {
      nextScreen();
    }
  });


  const arrows = document.createElement(`div`);

  arrows.innerHTML = `<style>
    .arrows__wrap {
      position: absolute;
      top: 95px;
      left: 50%;
      margin-left: -56px;
    }
    .arrows__btn {
      background: none;
      border: 2px solid black;
      padding: 5px 20px;
    }
  </style>
  <button class="arrows__btn"><-</button>
  <button class="arrows__btn">-></button>`;

  arrows.classList.add(`arrows__wrap`);

  document.body.insertAdjacentElement(`beforeEnd`, arrows);

  arrows.querySelectorAll(`.arrows__btn`).forEach((it) => {
    if (it.textContent === `<-`) {
      it.addEventListener(`click`, () => {
        nextScreen(inReverse);
      });
    }
    if (it.textContent === `->`) {
      it.addEventListener(`click`, () => {
        nextScreen();
      });
    }
  });

})();
