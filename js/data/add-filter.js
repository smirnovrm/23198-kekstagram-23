import {getRandomNumber} from '../utils/get-random-number.js';
import {previewImage, pictureList} from '../image/preview-image.js';
import {addFullImageHandler} from '../image/fullsize-image.js';

const NUMBER_RANDOM_PHOTOS = 10;
const RANDOM_NUMBER_START = 0;
const RANDOM_NUMBER_END = 2;
const RANDOM_CASE_ONE = 0;
const RANDOM_CASE_TWO = 1;
const RANDOM_CASE_THREE = 2;

const blockFilters = document.querySelector('.img-filters');
const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');

function getFilterDefault(photos) {
  return function(evt) {
    const defaultPictureArray = pictureList.querySelectorAll('.picture');
    document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    for (let i = 0; i < defaultPictureArray.length; i++) {
      pictureList.removeChild(defaultPictureArray[i]);
    }
    previewImage(photos);
    addFullImageHandler(photos);
  };
}

function getFilterRandom(photos) {
  return function(evt) {
    const defaultPictureArray = pictureList.querySelectorAll('.picture');
    document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    for (let i = 0; i < defaultPictureArray.length; i++) {
      pictureList.removeChild(defaultPictureArray[i]);
    }
    const randomPhotos = photos.slice();
    randomPhotos.sort(() => {
      switch (getRandomNumber(RANDOM_NUMBER_START, RANDOM_NUMBER_END)) {
        case RANDOM_CASE_ONE:
          return 1;
        case RANDOM_CASE_TWO:
          return -1;
        case RANDOM_CASE_THREE:
          return 0;
      }
    });
    randomPhotos.splice(NUMBER_RANDOM_PHOTOS, randomPhotos.length - NUMBER_RANDOM_PHOTOS);
    previewImage(randomPhotos);
    addFullImageHandler(randomPhotos);
  };
}

function getFilterMostDiscussed(photos) {
  return function(evt) {
    const defaultPictureArray = pictureList.querySelectorAll('.picture');
    document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    for (let i = 0; i < defaultPictureArray.length; i++) {
      pictureList.removeChild(defaultPictureArray[i]);
    }
    const discussedPhotos = photos.slice().sort((firstValue, secondValue) => {
      if (firstValue.comments.length > secondValue.comments.length) {
        return -1;
      } else if (firstValue.comments.length < secondValue.comments.length) {
        return 1;
      } else if (firstValue.comments.length === secondValue.comments.length) {
        return 0;
      }
    });
    previewImage(discussedPhotos);
    addFullImageHandler(discussedPhotos);
  };
}

export {getFilterMostDiscussed, getFilterDefault, getFilterRandom, filterRandom, filterDiscussed, filterDefault, blockFilters};
