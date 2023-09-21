import RadioListView from './radio-list-view.js';

function createSortTemplate(sortItems) {
  const sortItemsHTML = sortItems.map((sortItem) =>
    ` <div class="trip-sort__item trip-sort__item--${sortItem.type}">
      <input
        id="sort-${sortItem.type}"
        class="trip-sort__input visually-hidden"
        type="radio"
        name="trip-sort"
        value="sort-${sortItem.type}"
        data-item="${sortItem.type}"
        ${(sortItem.isChecked) ? 'checked' : ''}
        ${(sortItem.isDisabled) ? 'disabled' : ''}
      >
      <label class="trip-sort__btn" for="sort-${sortItem.type}">${sortItem.type}</label>
    </div>
  `).join('');

  return `
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${sortItemsHTML}
    </form>
  `;
}

export default class SortView extends RadioListView {
  get template() {
    return createSortTemplate(this._items);
  }
}
