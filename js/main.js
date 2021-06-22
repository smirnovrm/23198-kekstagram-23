import {createPostPhoto} from './data/create-post-photo.js';
import {previewImage} from './image/preview-image.js';
import {fullsizeImage} from './image/fullsize-image.js';

const COUNT_POST_PHOTO = 25;
const MAX_COUNT_COMMENT = 3;
const data = createPostPhoto(COUNT_POST_PHOTO, MAX_COUNT_COMMENT);

previewImage(data);

const bigPictureModal = document.querySelector('.big-picture');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const pictures = document.querySelectorAll('.picture');

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
