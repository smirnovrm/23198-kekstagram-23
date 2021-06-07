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

const COUNT_POST_PHOTO = 25;
const MIN_COUNT_COMMENT = 1;
const MAX_COUNT_COMMENT = 3;
const MIN_COUNT_ID = 1;
const MAX_COUNT_ID = 10000;
const MIN_AVATAR_NUMBER = 1;
const MAX_AVATAR_NUMBER = 6;
const MIN_LIKES_NUMBER = 15;
const MAX_LIKES_NUMBER = 200;


//В качестве образца для функции взял пример из
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//Получение случайного целого числа в заданном интервале, включительно
function getRandomNumber(from, to) {
  return ((from < 0 || to < 0) || (from >= to)) ? -1 : Math.floor(Math.random() * (Math.floor(to) - Math.ceil(from) + 1)) + Math.ceil(from);
}

getRandomNumber(5, 10);

function checkMaxLength(checkString, maxLength) {
  return (maxLength >= checkString.length);
}

checkMaxLength('Hello', 4);

function getRandomElements(elements) {
  return elements[getRandomNumber(0, elements.length-1)];
}

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
      url: `photo/${count}.jpg`,
      description: 'Описание фотографии',
      likes: getRandomNumber(MIN_LIKES_NUMBER, MAX_LIKES_NUMBER),
      comments: createComments(getRandomNumber(MIN_COUNT_COMMENT, maxCountComment)),
    });
  }
  return posts;
}

createPostPhoto(COUNT_POST_PHOTO, MAX_COUNT_COMMENT);
