import { createElement } from '../render.js';

const createFilmViewTemplate = ()=> (
  `<section class="films"></section>
    `
);

export default class FilmView {
  getTemplate() {
    return createFilmViewTemplate();
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
