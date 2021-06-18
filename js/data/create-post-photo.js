import {getRandomNumber} from '../utils/get-random-number.js';
import {getRandomElements} from '../utils/get-random-elements.js';

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
  'Артем',
  'Андрей',
];

const MIN_COUNT_COMMENT = 1;
const MIN_COUNT_ID = 1;
const MAX_COUNT_ID = 10000;
const MIN_AVATAR_NUMBER = 1;
const MAX_AVATAR_NUMBER = 6;
const MIN_LIKES_NUMBER = 15;
const MAX_LIKES_NUMBER = 200;

function createComments(commentCount) {
  const comments = [];

  for (let count = 1; count <= commentCount; count++) {
    comments.push({
      id: getRandomNumber(MIN_COUNT_ID, MAX_COUNT_ID),
      avatar: `img/avatar-${getRandomNumber(MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER)}.svg`,
      message: getRandomElements(COMMENTS),
      name: getRandomElements(NAMES),
    });
  }
  return comments;
}

function createPostPhoto(countPost, maxCountComment = 1) {
  const posts = [];

  for (let count = 1; count <= countPost; count++) {
    posts.push({
      id: count,
      url: `photos/${count}.jpg`,
      description: 'Описание фотографии',
      likes: getRandomNumber(MIN_LIKES_NUMBER, MAX_LIKES_NUMBER),
      comments: createComments(getRandomNumber(MIN_COUNT_COMMENT, maxCountComment)),
    });
  }
  return posts;
}

export {createPostPhoto};
