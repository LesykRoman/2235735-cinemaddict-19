import NoFilmView from '../view/no-film-view.js';
import NoFilterView from '../view/no-filter-view.js';
import FilmCountView from '../view/film-count-view.js';
import FilmCardView from '../view/film-card-view.js';
import FilmDetailsView from '../view/film-details-view.js';
import FilmListView from '../view/film-list-view.js';
import FilterView from '../view/filter-view.js';
import FilmView from '../view/film-view.js';
import ProfileView from '../view/profile-view.js';
import {render} from '../render.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import SortView from '../view/sort-view.js';


const FILM_COUNT_PER_STEP = 5;

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const siteFooterStatisticElement = document.querySelector('.footer__statistics');

let filmComments = [];

export default class FilmPresenter {
  #filmContainer = null;
  #filmModel = null;

  #filmComponent = new FilmView();
  #filmListComponent = new FilmListView();
  #showMoreButtonComponent = null;

  #films = [];
  #comments = [];
  #renderedFilmCount = FILM_COUNT_PER_STEP;

  constructor({filmContainer, filmModel}) {
    this.#filmContainer = filmContainer;
    this.#filmModel = filmModel;
  }

  init() {
    this.#films = [...this.#filmModel.films];
    this.#comments = [...this.#filmModel.comments];

    this.#renderFilms();


  }

  #renderFilms(){
    if (this.#films.length > 0){
      render (new FilterView(), siteMainElement);
      render (new ProfileView(), siteHeaderElement);
      render (new SortView(), siteMainElement);
      render (this.#filmComponent, this.#filmContainer);
      render (this.#filmListComponent, this.#filmComponent.element);

      for (let i = 0; i < Math.min(this.#films.length, FILM_COUNT_PER_STEP); i++){
        filmComments = [];
        this.#films[i].comments.forEach((id) => {
          for(let j = 0; j < this.#comments.length; j++){
            if(this.#comments[j].id === id){
              filmComments.push(this.#comments[j]);
            }
          }
        });
        this.#renderFilm(this.#films[i], filmComments);
      }
      if (this.#films.length > FILM_COUNT_PER_STEP){
        this.#showMoreButtonComponent = new ShowMoreButtonView();
        render (this.#showMoreButtonComponent, this.#filmListComponent.element);

        this.#showMoreButtonComponent.element.addEventListener('click', this.#showMoreButtonClickHandler);
      }

      render (new FilmCountView(), siteFooterStatisticElement);

    } else {
      render (new NoFilterView(), siteMainElement);
      render (this.#filmComponent, this.#filmContainer);
      render (new NoFilmView(), this.#filmComponent.element);
      siteFooterStatisticElement.innerHTML = '<p>0 movies inside</p>';
    }
  }

  #showMoreButtonClickHandler = (evt)=>{
    evt.preventDefault();
    this.#films
      .slice(this.#renderedFilmCount, this.#renderedFilmCount + FILM_COUNT_PER_STEP)
      .forEach((film) => this.#renderFilm(film, filmComments));

    this.#renderedFilmCount += FILM_COUNT_PER_STEP;

    if (this.#renderedFilmCount >= this.#films.length){
      this.#showMoreButtonComponent.element.remove();
      this.#showMoreButtonComponent.removeElement();
    }
  };

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
