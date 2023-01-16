import { FILTER_TYPES } from '../const';

const filter = {
  [FILTER_TYPES.WATCHLIST]:(films) => films.filter((film) => film.user_details.watchlist),
  [FILTER_TYPES.WATCHED]:(films) => films.filter((film) => film.user_details.already_watched),
  [FILTER_TYPES.FAVORITE]:(films) => films.filter((film) => film.user_details.favorite),
};

export {filter};
