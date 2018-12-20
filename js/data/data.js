import {getImagesForSingleGame, getImagesForDoubleGame, getImagesForTripleGame} from "../get-images";
import singleGame from '../single-game';
import doubleGame from '../double-game';
import tripleGame from '../triple-game';


export const TOTAL_QUESTIONS = 10;
export const TOTAL_LIVES = 4;

export const CORRECT_POINTS = 100;
export const FAST_BONUS = 50;
export const LIVES_BONUS = 50;
export const SLOW_PENALTY = 50;

export const images = {
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

export const LEVELS = {
  single: {
    game: singleGame,
    task: `Угадай, фото или рисунок?`,
    images: getImagesForSingleGame
  },
  double: {
    game: doubleGame,
    task: `Угадайте для каждого изображения фото или рисунок?`,
    images: getImagesForDoubleGame

  },
  triple: {
    game: tripleGame,
    task: `Найдите рисунок среди изображений?`,
    images: getImagesForTripleGame
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

