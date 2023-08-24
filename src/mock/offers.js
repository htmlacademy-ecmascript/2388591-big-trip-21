import { getRandomArrayElement, getRandomInteger } from '../utils.js';
import { Price, OFFER_TYPE } from './const.js';

function generateOffer() {
  const offerType = getRandomArrayElement(OFFER_TYPE);
  return {
    id: crypto.randomUUID(),
    title: `${offerType}`,
    price: getRandomInteger(Price.MIN, (Price.MAX / 10))
  };
}

export { generateOffer };
