import dayjs from 'dayjs';

function getPointsDateDiff(pointA,pointB) {
  return dayjs(pointB.dateFrom).diff(dayjs(pointA.dateTo));
}

function getPointsDurationDiff(pointA, pointB) {
  const pointADuration = dayjs(pointA.dateTo).diff(dayjs(pointA.dateFrom));
  const pointBDuration = dayjs(pointB.dateTo).diff(dayjs(pointB.dateFrom));
  return dayjs(pointBDuration).diff(dayjs(pointADuration));
}

function getPointsPriceDiff(pointA, pointB) {
  return pointB.basePrice - pointA.basePrice;
}

export {getPointsDateDiff, getPointsPriceDiff, getPointsDurationDiff};


