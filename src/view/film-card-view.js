import { createElement } from '../render.js';
import { humanizeFilmReleaseDateToYear, getTimeFromMins } from '../utils.js';

const createFilmCardTemplate = (film)=>{
  const {comments, film_info} = film;
  return (
    `<article class="film-card">
      <a class="film-card__link">
        <h3 class="film-card__title">${film_info.title}</h3>
        <p class="film-card__rating">${film_info.total_rating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${humanizeFilmReleaseDateToYear(film_info.release.date)}</span>
          <span class="film-card__duration">${getTimeFromMins(film_info.duration)}</span>
          <span class="film-card__genre">${film_info.genre}</span>
        </p>
        <img src="${film_info.poster}" alt="" class="film-card__poster">
        <p class="film-card__description">${film_info.description}</p>
        <span class="film-card__comments">${comments.length} comments</span>
      </a>
      <div class="film-card__controls">
        <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
        <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
        <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
      </div>
    </article>
      `
  );
};

export default class FilmCardView {
  constructor ({film}){
    this.film = film;
  }

  getTemplate() {
    return createFilmCardTemplate(this.film);
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
