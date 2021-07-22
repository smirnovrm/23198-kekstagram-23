import {previewImage} from './image/preview-image.js';
import {addFullImageHandler, loadMoreCommentsButton, onShowComments} from './image/fullsize-image.js';
import {validComment, validTag} from './image/form-image.js';
import {onZoomImageDown, onZoomImageUp} from './image/zoom-image.js';
import {addEffectHandler} from './image/add-effect.js';
import {uploadData} from './data/upload-data.js';
import {uploadImage} from './data/upload-image.js';
import {addErrorBox, renderMessageModal} from './data/message.js';
import {closeUploadForm} from './utils/close-upload-form.js';

const ESC_KEY_CODE = 27;
const FILE_TYPES = ['jpeg', 'jpg', 'png'];

uploadData(previewImage, addFullImageHandler, addErrorBox);

const bigPictureModal = document.querySelector('.big-picture');
const uploadFormImage = document.querySelector('.img-upload__overlay');
const hashtagInput = uploadFormImage.querySelector('.text__hashtags');
const commentInput = uploadFormImage.querySelector('.text__description');

document.querySelector('.big-picture__cancel').addEventListener('click', () => {
  bigPictureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  loadMoreCommentsButton.removeEventListener('click', onShowComments);
});

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === ESC_KEY_CODE) {
    bigPictureModal.classList.add('hidden');
    document.body.classList.remove('modal-open');
    loadMoreCommentsButton.removeEventListener('click', onShowComments);
  }
});

document.querySelector('#upload-file').addEventListener('change', () => {
  uploadFormImage.classList.remove('hidden');
  document.body.classList.add('modal-open');
  validComment();
  validTag();
  document.querySelector('.scale__control--smaller').addEventListener('click', onZoomImageDown);
  document.querySelector('.scale__control--bigger').addEventListener('click', onZoomImageUp);
  document.querySelector('.effects__list').addEventListener('change', addEffectHandler);
});

document.querySelector('.img-upload__cancel').addEventListener('click', () => {
  closeUploadForm();
});

window.addEventListener('keydown', (evt) => {
  if (hashtagInput === document.activeElement || commentInput === document.activeElement) {
    document.body.classList.add('modal-open');
    return null;
  } else if (evt.keyCode === ESC_KEY_CODE) {
    closeUploadForm();
  }
});

const sendForm = document.querySelector('.img-upload__form');
const fileInput = document.querySelector('.img-upload__input');

function setUserFormSubmit(onSuccess, onError) {
  sendForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const fileName = fileInput.files[0].name.toLowerCase();
    const matches = FILE_TYPES.some((item) => fileName.endsWith(item));
    if (!matches) {
      onError();
      throw new Error('Неверный формат файла.');
    }
    uploadImage(new FormData(evt.target), () => onSuccess(), () => onError());
  });
}

function executeFormSuccess() {
  closeUploadForm();
  renderMessageModal('success');
}

function executeFormError() {
  closeUploadForm();
  renderMessageModal('error');
}

setUserFormSubmit(executeFormSuccess, executeFormError);
