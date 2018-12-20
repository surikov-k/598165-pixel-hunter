import {images} from './data/data';
import {getRandomFromArray} from './utils';
import {gameStatus} from './start-new-game';

const getImage = () => {
  let url;
  const isPhoto = Math.round(Math.random());
  if (isPhoto) {
    url = getRandomFromArray(images.photos);
    gameStatus.correctAnswers.push(`photo`);
  } else {
    url = getRandomFromArray(images.paintings);
    gameStatus.correctAnswers.push(`paint`);
  }
  return url;
};

export const getImagesForSingleGame = () => {
  return getImage();
};

export const getImagesForDoubleGame = () => {
  const urls = [];
  for (let i = 0; i <= 1; i++) {
    urls.push(getImage());
  }
  return urls;
};

export const getImagesForTripleGame = () => {
  const urls = [];
  for (let i = 0; i <= 2; i++) {
    urls.push(getImage());
  }
  return urls;
};
