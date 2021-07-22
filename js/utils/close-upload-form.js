import {zoomImageDrop} from '../image/zoom-image.js';
import {dropEffect} from '../image/add-effect.js';

const uploadFormImage = document.querySelector('.img-upload__overlay');
const uploadInput = document.querySelector('.img-upload__input');
const hashtagsInput = document.querySelector('.text__hashtags');
const descriptionTextarea = document.querySelector('.text__description');

function closeUploadForm() {
  uploadInput.value = '';
  hashtagsInput.value = '';
  descriptionTextarea.value = '';
  uploadFormImage.classList.add('hidden');
  document.body.classList.remove('modal-open');
  zoomImageDrop();
  dropEffect();
}

export {closeUploadForm};
