import {previewImage} from './image/preview-image.js';
import {addFullImageHandler, loadMoreCommentsButton, showComments} from './image/fullsize-image.js';
import {validComment, validTag} from './image/form-image.js';
import {zoomImageDown, zoomImageUp} from './image/zoom-image.js';
import {addEffect} from './image/add-effect.js';
import {uploadData} from './data/upload-data.js';
import {uploadImage} from './data/upload-image.js';
import {addErrorBox, renderMessageModal} from './data/message.js';
import {closeUploadForm} from './utils/close-upload-form.js';

uploadData(previewImage, addFullImageHandler, addErrorBox);

const bigPictureModal = document.querySelector('.big-picture');
const uploadFormImage = document.querySelector('.img-upload__overlay');
const hashtagInput = uploadFormImage.querySelector('.text__hashtags');
const commentInput = uploadFormImage.querySelector('.text__description');

document.querySelector('.big-picture__cancel').addEventListener('click', () => {
  bigPictureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  loadMoreCommentsButton.removeEventListener('click', showComments);
});

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    bigPictureModal.classList.add('hidden');
    document.body.classList.remove('modal-open');
    loadMoreCommentsButton.removeEventListener('click', showComments);
  }
});

document.querySelector('#upload-file').addEventListener('change', () => {
  uploadFormImage.classList.remove('hidden');
  document.body.classList.add('modal-open');
  validComment();
  validTag();
  document.querySelector('.scale__control--smaller').addEventListener('click', zoomImageDown);
  document.querySelector('.scale__control--bigger').addEventListener('click', zoomImageUp);
  document.querySelector('.effects__list').addEventListener('change', addEffect);
});

document.querySelector('.img-upload__cancel').addEventListener('click', () => {
  closeUploadForm();
});

window.addEventListener('keydown', (evt) => {
  if (hashtagInput === document.activeElement || commentInput === document.activeElement) {
    document.body.classList.add('modal-open');
    return null;
  } else if (evt.keyCode === 27) {
    closeUploadForm();
  }
});

const sendForm = document.querySelector('.img-upload__form');

const setUserFormSubmit = (onSuccess, onError) => {
  sendForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    uploadImage(new FormData(evt.target), () => onSuccess(), () => onError());
  });
};

const executeFormSuccess = () => {
  closeUploadForm();
  renderMessageModal('success');
};

const executeFormError = () => {
  closeUploadForm();
  renderMessageModal('error');
};

setUserFormSubmit(executeFormSuccess, executeFormError);
