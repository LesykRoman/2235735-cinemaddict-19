import { createElement } from '../render.js';

function createFilterTemplate() {
  return (
    `<section class="films"></section>
    `
  );
}

export default class FilmView {
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
