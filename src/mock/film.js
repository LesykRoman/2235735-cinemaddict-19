import { POSTERS, TITLES, DESCRIPTIONS } from '../const';
import { getRandomArrayElement } from '../utils';

const film = [
  {
    'id': '0',
    'comments': [
      '42', '44','47'
    ],
    'filmInfo': {
      'title': `${getRandomArrayElement(TITLES)}`,
      'alternative_title': 'Laziness Who Sold Themselves',
      'total_rating': 7.0,
      'poster': `images/posters/${getRandomArrayElement(POSTERS)}`,
      'age_rating': 0,
      'director': 'Tom Ford',
      'writers': [
        'Takeshi Kitano'
      ],
      'actors': [
        'Morgan Freeman'
      ],
      'release': {
        'date': '2019-05-11T00:00:00.000Z',
        'release_country': 'Finland'
      },
      'duration': 77,
      'genre': [
        'Comedy'
      ],
      'description': `${getRandomArrayElement(DESCRIPTIONS)}`
    },
    'user_details': {
      'watchlist': false,
      'already_watched': true,
      'watching_date': '2019-04-12T16:12:32.554Z',
      'favorite': false
    }
  },
  {
    'id': '0',
    'comments': [
      '43'
    ],
    'filmInfo': {
      'title': `${getRandomArrayElement(TITLES)}`,
      'alternative_title': 'Laziness Who Sold Themselves',
      'total_rating': 5.3,
      'poster': `images/posters/${getRandomArrayElement(POSTERS)}`,
      'age_rating': 0,
      'director': 'Tom Ford',
      'writers': [
        'Takeshi Kitano'
      ],
      'actors': [
        'Morgan Freeman'
      ],
      'release': {
        'date': '2019-05-11T00:00:00.000Z',
        'release_country': 'Finland'
      },
      'duration': 77,
      'genre': [
        'Comedy'
      ],
      'description': `${getRandomArrayElement(DESCRIPTIONS)}`
    },
    'user_details': {
      'watchlist': false,
      'already_watched': true,
      'watching_date': '2019-04-12T16:12:32.554Z',
      'favorite': false
    }
  },
  {
    'id': '0',
    'comments': [
      '45', '46'
    ],
    'filmInfo': {
      'title': `${getRandomArrayElement(TITLES)}`,
      'alternative_title': 'Laziness Who Sold Themselves',
      'total_rating': 2,
      'poster': `images/posters/${getRandomArrayElement(POSTERS)}`,
      'age_rating': 0,
      'director': 'Tom Ford',
      'writers': [
        'Takeshi Kitano'
      ],
      'actors': [
        'Morgan Freeman'
      ],
      'release': {
        'date': '2019-05-11T00:00:00.000Z',
        'release_country': 'Finland'
      },
      'duration': 77,
      'genre': [
        'Comedy'
      ],
      'description': `${getRandomArrayElement(DESCRIPTIONS)}`
    },
    'user_details': {
      'watchlist': false,
      'already_watched': true,
      'watching_date': '2019-04-12T16:12:32.554Z',
      'favorite': false
    }
  }
];

const getRandomFilm = ()=> getRandomArrayElement(film);

export { getRandomFilm };

