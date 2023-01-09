import FilmCountView from './view/film-count-view.js';
import FilmPresenter from './presenter/film-presenter.js';
import FilterView from './view/filter-view.js';
import FilmModel from './model/film-model.js';
import ProfileView from './view/profile-view.js';
import {render} from './render.js';
import SortView from './view/sort-view.js';


const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const siteFooterStatisticElement = document.querySelector('.footer__statistics');

const filmModel = new FilmModel();
const filmPresenter = new FilmPresenter({
  filmContainer:siteMainElement,
  filmModel
});

render (new FilterView(), siteMainElement);
render (new ProfileView(), siteHeaderElement);
render (new SortView(), siteMainElement);
render (new FilmCountView(), siteFooterStatisticElement);

filmPresenter.init();

