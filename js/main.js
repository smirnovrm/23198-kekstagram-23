import {createPostPhoto} from './data/create-post-photo.js';
import {previewImage} from './image/preview-image.js';
import {fullsizeImage} from './image/fullsize-image.js';
import {validComment, validTag} from './image/form-image.js';
import {zoomImageDown, zoomImageUp} from './image/zoom-image.js';

const COUNT_POST_PHOTO = 25;
const MAX_COUNT_COMMENT = 3;
const data = createPostPhoto(COUNT_POST_PHOTO, MAX_COUNT_COMMENT);

previewImage(data);

const bigPictureModal = document.querySelector('.big-picture');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const pictures = document.querySelectorAll('.picture');

const uploadFormImage = document.querySelector('.img-upload__overlay');
const uploadInput = document.querySelector('.img-upload__input');
const hashtagInput = uploadFormImage.querySelector('.text__hashtags');
const commentInput = uploadFormImage.querySelector('.text__description');

pictures.forEach((picture, pictureIndex) => {
  picture.addEventListener('click', (evt) => {
    evt.preventDefault();
    bigPictureModal.classList.remove('hidden');
    document.body.classList.add('modal-open');
    fullsizeImage(data[pictureIndex]);
    commentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
  });
});

document.querySelector('.big-picture__cancel').addEventListener('click', () => {
  bigPictureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    bigPictureModal.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
});

document.querySelector('#upload-file').addEventListener('change', () => {
  uploadFormImage.classList.remove('hidden');
  document.body.classList.add('modal-open');
  validComment();
  validTag();
  document.querySelector('.scale__control--smaller').addEventListener('click', zoomImageDown);
  document.querySelector('.scale__control--bigger').addEventListener('click', zoomImageUp);
});

document.querySelector('.img-upload__cancel').addEventListener('click', () => {
  uploadInput.value = '';
  uploadFormImage.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

window.addEventListener('keydown', (evt) => {
  if (hashtagInput === document.activeElement || commentInput === document.activeElement) {
    document.body.classList.add('modal-open');
    return null;
  } else if (evt.keyCode === 27) {
    uploadInput.value = '';
    uploadFormImage.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
});
