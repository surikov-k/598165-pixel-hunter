import {getRandomFromArray} from "./utils";
import {LEVELS} from "./data/game-types";

export default () => {
  const types = Object.keys(LEVELS);
  const type = getRandomFromArray(types);
  return type;
};
