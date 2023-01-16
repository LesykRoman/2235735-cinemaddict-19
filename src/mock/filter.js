import { filter } from '../utils/filter';

function generateFilter(films) {
  return Object.entries(filter).map(
    ([filterName, filterTasks]) => ({
      name: filterName,
      count: filterTasks(films).length,
    }),
  );
}

export {generateFilter};
