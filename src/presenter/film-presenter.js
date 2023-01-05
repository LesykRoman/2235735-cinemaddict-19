import FilmCardView from '../view/film-card-view.js';
import FilmListView from '../view/film-list-view.js';
import FilmView from '../view/film-view.js';
import {render} from '../render.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';

const FILM_CARD_COUNT = 5;

export default class FilmPresenter {
  filmComponent = new FilmView();
  filmListComponent = new FilmListView();

  constructor({filmContainer}) {
    this.filmContainer = filmContainer;
  }

  init() {
    render (this.filmComponent, this.filmContainer);
    render (this.filmListComponent, this.filmComponent.getElement());
    for (let i = 0; i < FILM_CARD_COUNT; i++){
      render (new FilmCardView(), this.filmListComponent.getElement().querySelector('.films-list__container'));
    }
    render (new ShowMoreButtonView(), this.filmListComponent.getElement());
  }
}
