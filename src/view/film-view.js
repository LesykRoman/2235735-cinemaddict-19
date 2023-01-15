import { createElement } from '../render.js';

const createFilmViewTemplate = ()=> (
  `<section class="films"></section>
    `
);

export default class FilmView {
  #element = null;
  get template() {
    return createFilmViewTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
