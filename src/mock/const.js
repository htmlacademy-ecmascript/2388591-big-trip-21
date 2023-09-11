const POINT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const CITIES = [
  'Chamonix',
  'Geneva',
  'Amsterdam',
  'Helsinki',
  'Oslo',
  'Kopenhagen',
  'Den Haag',
  'Rotterdam',
  'Saint Petersburg',
  'Moscow',
  'Sochi',
  'Tokio'
];

const OFFER_TYPE = [
  'Uber',
  'Add luggage',
  'Switch to comfort'
];

const DESCRIPTION = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.';

const DESTINATION_COUNT = 5;
const OFFER_COUNT = 10;
const POINT_COUNT = 5;

const Price = {
  MIN: 1,
  MAX: 1000
};

const Duration = {
  HOUR: 5,
  DAY: 5,
  MIN: 59
};

const DEFAULT_TYPE = 'flight';

const POINT_EMPTY = {
  basePrice: 0,
  dateFrom: null,
  dateTo: null,
  destination: null,
  isFavorite: false,
  offers: [],
  type: DEFAULT_TYPE
};

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export {
  POINT_TYPES,
  DESTINATION_COUNT,
  OFFER_COUNT,
  POINT_COUNT,
  POINT_EMPTY,
  CITIES,
  DESCRIPTION,
  Price,
  Duration,
  OFFER_TYPE,
  Mode
};


