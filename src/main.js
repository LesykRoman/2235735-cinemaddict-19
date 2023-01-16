
import FilmPresenter from './presenter/film-presenter.js';
import FilmModel from './model/film-model.js';

const siteMainElement = document.querySelector('.main');
// const siteHeaderElement = document.querySelector('.header');
// const siteFooterStatisticElement = document.querySelector('.footer__statistics');

const filmModel = new FilmModel();
const filmPresenter = new FilmPresenter({
  filmContainer:siteMainElement,
  filmModel
});

// render (new FilterView(), siteMainElement);
// render (new ProfileView(), siteHeaderElement);
// render (new SortView(), siteMainElement);
// render (new FilmCountView(), siteFooterStatisticElement);

filmPresenter.init();

