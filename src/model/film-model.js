import { getRandomFilm } from '../mock/film';
import { comments } from '../mock/comment';

const FILM_COUNT = 18;

export default class FIlmModel {
  #films = Array.from({length: FILM_COUNT}, getRandomFilm);
  // #films = [];
  #comments = comments;

  get films() {
    return this.#films;
  }

  get comments() {
    return this.#comments;
  }
}
