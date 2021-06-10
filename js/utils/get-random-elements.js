import {getRandomNumber} from './get-random-number.js';

function getRandomElements(elements) {
  return elements[getRandomNumber(0, elements.length-1)];
}

export {getRandomElements};
