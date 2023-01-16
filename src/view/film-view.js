import AbstractView from '../framework/view/abstract-view.js';

const createFilmViewTemplate = ()=> (
  `<section class="films"></section>
    `
);

export default class FilmView extends AbstractView {
  get template() {
    return createFilmViewTemplate();
  }
}
