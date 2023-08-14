import FilterView from './view/list-filter-veiw.js';
import TripInfo from './view/trip-info-view.js';
import { RenderPosition, render } from './render.js';
import BoardPresenter from './presenter/board-presenter.js';

const bodyElement = document.querySelector('body');
const headerElement = bodyElement.querySelector('.page-header');
const tripInfoElement = headerElement.querySelector('.trip-main');
const filterElement = tripInfoElement.querySelector('.trip-controls__filters');
const mainElement = bodyElement.querySelector('.page-main');
const eventListElement = mainElement.querySelector('.trip-events');

const boardPresenter = new BoardPresenter({
  container: eventListElement
});
render (new TripInfo(), tripInfoElement, RenderPosition.AFTERBEGIN);
render (new FilterView(), filterElement);

boardPresenter.init();
