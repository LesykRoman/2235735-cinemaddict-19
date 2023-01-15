import FilmCardView from '../view/film-card-view.js';
import FilmListView from '../view/film-list-view.js';
import FilmView from '../view/film-view.js';
import {render} from '../render.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import FilmDetailsView from '../view/film-details-view.js';


export default class FilmPresenter {
  #filmContainer = null;
  #filmModel = null;

  #filmComponent = new FilmView();
  #filmListComponent = new FilmListView();

  #films = [];
  #comments = [];

  constructor({filmContainer, filmModel}) {
    this.#filmContainer = filmContainer;
    this.#filmModel = filmModel;
  }

  init() {
    this.#films = [...this.#filmModel.films];
    this.#comments = [...this.#filmModel.comments];
    render (this.#filmComponent, this.#filmContainer);
    render (this.#filmListComponent, this.#filmComponent.element);
    for (let i = 0; i < this.#films.length; i++){
      const filmComments = [];
      this.#films[i].comments.forEach((id) => {
        for(let j = 0; j < this.#comments.length; j++){
          if(this.#comments[j].id === id){
            filmComments.push(this.#comments[j]);
          }
        }
      });
      this.#renderFilm(this.#films[i], filmComments);
    }
    render (new ShowMoreButtonView(), this.#filmListComponent.element);

  }

  #renderFilm(film, comments){
    const filmCard = new FilmCardView({film});
    const filmDetails = new FilmDetailsView({film}, comments);

    const openFilmDetails = ()=>{
      document.body.appendChild(filmDetails.element);
      document.body.classList.add('hide-overflow');
    };

    const closeFilmDetails = ()=>{
      document.body.removeChild(filmDetails.element);
      document.body.classList.remove('hide-overflow');
    };

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        closeFilmDetails();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    filmCard.element.querySelector('.film-card__link').addEventListener('click', ()=>{
      openFilmDetails();
      document.addEventListener('keydown', escKeyDownHandler);
    });

    filmDetails.element.querySelector('.film-details__close-btn').addEventListener('click', ()=>{
      closeFilmDetails();
      document.removeEventListener('keydown', escKeyDownHandler);
    });

    render (filmCard, this.#filmListComponent.element.querySelector('.films-list__container'));
  }
}
