import { getRandomArrayElement } from '../utils/common';
import { EMOTIONS } from '../const';

const comments = [
  {
    'id': '42',
    'author': 'Ilya O\'Reilly',
    'comment': 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
    'date': '2019-05-11T10:12:32.554Z',
    'emotion': `${getRandomArrayElement(EMOTIONS)}`
  },
  {
    'id': '43',
    'author': 'Test2',
    'comment': 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
    'date': '2019-05-11T10:12:32.554Z',
    'emotion': `${getRandomArrayElement(EMOTIONS)}`
  },
  {
    'id': '44',
    'author': 'Test3',
    'comment': 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
    'date': '2019-05-11T10:12:32.554Z',
    'emotion': `${getRandomArrayElement(EMOTIONS)}`
  },
  {
    'id': '45',
    'author': 'Test4',
    'comment': 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
    'date': '2019-05-11T10:12:32.554Z',
    'emotion': `${getRandomArrayElement(EMOTIONS)}`
  },
  {
    'id': '46',
    'author': 'Test5',
    'comment': 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
    'date': '2019-05-11T10:12:32.554Z',
    'emotion': `${getRandomArrayElement(EMOTIONS)}`
  },
  {
    'id': '47',
    'author': 'Test6',
    'comment': 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
    'date': '2019-05-11T16:12:32.554Z',
    'emotion': `${getRandomArrayElement(EMOTIONS)}`
  }
];

export {comments};
