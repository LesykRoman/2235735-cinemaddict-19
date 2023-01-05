import { createElement } from '../render.js';

const createFilterTemplate = ()=> (
  `<button class="films-list__show-more">Show more</button>
    `
);

export default class ShowMoreButtonView {
  getTemplate() {
    return createFilterTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
