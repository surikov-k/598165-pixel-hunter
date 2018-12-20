import {getImagesForSingleGame, getImagesForDoubleGame, getImagesForTripleGame} from "../get-images";
import singleGame from '../single-game';
import doubleGame from '../double-game';
import tripleGame from '../triple-game';

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
