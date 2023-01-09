import dayjs from 'dayjs';

const DATE_FORMAT_YEAR = 'YYYY';
const DATE_FORMAT_DAY_MONTH_YEAR = 'DD MMMM YYYY';

function humanizeFilmReleaseDateToYear(releaseDate) {
  return releaseDate ? dayjs(releaseDate).format(DATE_FORMAT_YEAR) : '';
}

function humanizeFilmReleaseDateToDay(releaseDate) {
  return releaseDate ? dayjs(releaseDate).format(DATE_FORMAT_DAY_MONTH_YEAR) : '';
}


function getTimeFromMins(mins) {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;
  return `${hours}h ${minutes}m`;
}

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export {getRandomArrayElement, humanizeFilmReleaseDateToYear,humanizeFilmReleaseDateToDay, getTimeFromMins};
