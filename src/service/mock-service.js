import { generateDestination } from '../mock/destination.js';
import { generateOffer } from '../mock/offers.js';
import { generatePoint } from '../mock/point.js';

import { DESTINATION_COUNT, OFFER_COUNT, POINT_COUNT, POINT_TYPES } from '../mock/const.js';
import { getRandomInteger, getRandomArrayElement } from '../utils.js';

export default class MockService {
  destinations = [];
  offers = [];
  points = [];

  constructor() {
    this.destinations = this.generateDestinations();
    this.offers = this.generateOffers();
    this.points = this.generatePoints();
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }

  getPoints() {
    return this.points;
  }

  generateDestinations() {
    return Array.from(
      {length: DESTINATION_COUNT},
      () => generateDestination()
    );
  }

  generateOffers() {
    return POINT_TYPES.map((type) => ({
      type,
      offers: Array.from({length: getRandomInteger(0, OFFER_COUNT)}, () => generateOffer(type))
    }));
  }

  generatePoints() {
    return Array.from({length: POINT_COUNT}, () => {
      const type = getRandomArrayElement(POINT_TYPES);
      const destination = getRandomArrayElement(this.destinations);

      const hasOffers = getRandomInteger(0, 1);

      const offersByType = this.offers
        .find((offerByType) => offerByType.type === type);

      const offerIds = (hasOffers)
        ? offersByType.offers
          .slice(0, getRandomInteger(0, OFFER_COUNT))
          .map((offer) => offer.id)
        : [];

      return generatePoint(type, destination.id, offerIds);
    });
  }
}
