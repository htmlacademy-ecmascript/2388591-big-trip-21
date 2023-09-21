import { getRandomArrayElement } from '../utils/utils.js';
import { CITIES, DESCRIPTION } from './const.js';

function generateDestination () {
  const city = getRandomArrayElement(CITIES);

  return {
    id: crypto.randomUUID(),
    name: city,
    description: DESCRIPTION,
    pictures: [
      {
        'src': `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
        'description': `${city} description`
      }
    ]
  };
}

export { generateDestination };
