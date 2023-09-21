import { SortType } from '../mock/const.js';
import {
  getPointsDateDiff,
  getPointsPriceDiff,
  getPointsDurationDiff
} from './point-diff.js';

const sort = {
  [SortType.DAY]: (points) => points.toSorted(getPointsDateDiff),
  [SortType.PRICE]: (points) => points.toSorted(getPointsPriceDiff),
  [SortType.TIME]: (points) => points.toSorted(getPointsDurationDiff),
  [SortType.EVENT]: () => {
    throw new Error (`Sort by ${SortType.EVENT} is not implemented`);
  },
  [SortType.OFFER]: () => {
    throw new Error (`Sort by ${SortType.OFFER} is not implemented`);
  },

};
export { sort };

