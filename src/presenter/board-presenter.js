import PointView from '../view/point-view.js';
import SortView from '../view/list-sort-view.js';
import EventListView from '../view/event-list-view.js';
import PointEditView from '../view/point-edit-veiw.js';
import { render, replace } from '../framework/render.js';

export default class BoardPresenter {
  #container = null;
  #destinationsModel = null;
  #offersModel = null;
  #pointsModel = null;

  #sortComponent = new SortView();
  #eventListComponent = new EventListView();

  #points = [];

  constructor({container, destinationsModel, offersModel, pointsModel}) {
    this.#container = container;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#pointsModel = pointsModel;

    this.#points = [...this.#pointsModel.get()];
  }

  init() {
    this.#eventListComponent = new EventListView();

    render(this.#sortComponent, this.#container);
    render(this.#eventListComponent, this.#container);

    this.#points.forEach((point) => {
      this.#renderPoint(point);
    });
  }

  #renderPoint = (point) => {
    const pointComponent = new PointView({
      point,
      pointDestination: this.#destinationsModel.getById(point.destination),
      pointOffers: this.#offersModel.getByType(point.type),
      onEditClick: pointEditClickHandler
    });

    const pointEditComponent = new PointEditView({
      point,
      pointDestinations: this.#destinationsModel.get(),
      pointOffers: this.#offersModel.get(),
      onResetClick: resetButtonClickHandler,
      onSubmitClick: pointSubmitHandler
    });

    const replacePointToEdit = () => {
      replace(pointEditComponent, pointComponent);
    };

    const replaceEditToPoint = () => {
      replace(pointComponent, pointEditComponent);
    };

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceEditToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    function pointEditClickHandler() {
      replacePointToEdit();
      document.addEventListener('keydown', escKeyDownHandler);
    }

    function resetButtonClickHandler() {
      replaceEditToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    }

    function pointSubmitHandler() {
      replaceEditToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    }
    render(pointComponent, this.#eventListComponent.element);
  };
}


