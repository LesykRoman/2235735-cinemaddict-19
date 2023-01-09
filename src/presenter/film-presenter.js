import FilmCardView from '../view/film-card-view.js';
import FilmListView from '../view/film-list-view.js';
import FilmView from '../view/film-view.js';
import {render} from '../render.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';


export default class FilmPresenter {
  filmComponent = new FilmView();
  filmListComponent = new FilmListView();

  constructor({filmContainer, filmModel}) {
    this.filmContainer = filmContainer;
    this.filmModel = filmModel;
  }

  init() {
    this.films = [...this.filmModel.getFilms()];
    render (this.filmComponent, this.filmContainer);
    render (this.filmListComponent, this.filmComponent.getElement());
    for (let i = 0; i < this.films.length; i++){
      render (new FilmCardView({film:this.films[i]}), this.filmListComponent.getElement().querySelector('.films-list__container'));
    }
    render (new ShowMoreButtonView(), this.filmListComponent.getElement());
  }
}
