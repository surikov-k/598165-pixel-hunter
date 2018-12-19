import {getRandomFromArray} from '../utils';
import {gameStatus} from '../start-new-game';

export const TOTAL_QUESTIONS = 10;
export const TOTAL_LIVES = 4;

export const CORRECT_POINTS = 100;
export const FAST_BONUS = 50;
export const LIVES_BONUS = 50;
export const SLOW_PENALTY = 50;

const images = {
  paintings: [
    `https://k42.kn3.net/CF42609C8.jpg`,
    `https://k42.kn3.net/D2F0370D6.jpg`,
    `https://k32.kn3.net/5C7060EC5.jpg`
  ],
  photos: [
    `http://i.imgur.com/1KegWPz.jpg`,
    `https://i.imgur.com/DiHM5Zb.jpg`,
    `http://i.imgur.com/DKR1HtB.jpg`
  ]
};

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
  return [url];
};

export const LEVELS = {
  single: {
    name: `single`,
    task: `Угадай, фото или рисунок?`,
    images: getImage
  },
  double: {
    name: `double`,
    task: `Угадайте для каждого изображения фото или рисунок?`,
    images: getImage

  },
  triple: {
    name: `triple`,
    task: `Найдите рисунок среди изображений?`,
    images: getImage
  }
};

export const INITIAL_STATE = Object.freeze({
  levelNumber: 0,
  levelType: ``,
  correctAnswers: [],
  playerAnswers: [],
  lives: TOTAL_LIVES,
  time: 33,
  stats: []
});

export const answers = [];

