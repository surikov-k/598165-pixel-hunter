import {getRandomFromArray} from "./utils";
import {LEVELS} from "./data/data";

export default () => {
  const types = Object.keys(LEVELS);
  const type = getRandomFromArray(types);
  return type;
};
