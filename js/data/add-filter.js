import {getRandomNumber} from '../utils/get-random-number.js';
import {previewImage, pictureList} from '../image/preview-image.js';
import {addFullImageHandler} from '../image/fullsize-image.js';

const blockFilters = document.querySelector('.img-filters');
const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');

const NUMBER_RANDOM_PHOTOS = 10;

const getFilterDefault = (photos) => (evt) => {
  const defaultPictureArray = pictureList.querySelectorAll('.picture');
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  evt.target.classList.add('img-filters__button--active');
  for (let i = 0; i < defaultPictureArray.length; i++) {
    pictureList.removeChild(defaultPictureArray[i]);
  }
  previewImage(photos);
  addFullImageHandler(photos);
};

const getFilterRandom = (photos) => (evt) => {
  const defaultPictureArray = pictureList.querySelectorAll('.picture');
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  evt.target.classList.add('img-filters__button--active');
  for (let i = 0; i < defaultPictureArray.length; i++) {
    pictureList.removeChild(defaultPictureArray[i]);
  }
  const randomPhotos = photos.slice();
  randomPhotos.sort(() => {
    switch (getRandomNumber(0, 2)) {
      case 0:
        return 1;
      case 1:
        return -1;
      case 2:
        return 0;
    }
  });
  randomPhotos.splice(NUMBER_RANDOM_PHOTOS, randomPhotos.length - NUMBER_RANDOM_PHOTOS);
  previewImage(randomPhotos);
  addFullImageHandler(randomPhotos);
};

const getFilterMostDiscussed = (photos) => (evt) => {
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

export {getFilterMostDiscussed, getFilterDefault, getFilterRandom, filterRandom, filterDiscussed, filterDefault, blockFilters};
