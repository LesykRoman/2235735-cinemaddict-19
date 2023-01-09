import { getRandomFilm } from '../mock/film';

const FILM_COUNT = 5;

export default class FIlmModel {
  films = Array.from({length: FILM_COUNT}, getRandomFilm);

  getFilms() {
    return this.films;
  }
}
