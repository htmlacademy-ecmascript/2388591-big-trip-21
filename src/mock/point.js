import {getRandomInteger} from '../utils/utils.js';
import { Price } from './const.js';
import { getDate } from './date.js';

function generatePoint(type, destinationId, offerIds) {
  return {
    id: crypto.randomUUID(),
    basePrice: getRandomInteger(Price.MIN, Price.MAX),
    dateFrom: getDate({next: false}),
    dateTo: getDate({next: true}),
    destination: destinationId,
    isFavorite: Boolean(getRandomInteger(0, 1)),
    offers: offerIds,
    type
  };
}

export { generatePoint };
