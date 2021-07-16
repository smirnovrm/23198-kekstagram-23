import {zoomImageDrop} from '../image/zoom-image.js';
import {dropEffect} from '../image/add-effect.js';

const uploadFormImage = document.querySelector('.img-upload__overlay');
const uploadInput = document.querySelector('.img-upload__input');

function closeUploadForm() {
  uploadInput.value = '';
  uploadFormImage.classList.add('hidden');
  document.body.classList.remove('modal-open');
  zoomImageDrop();
  dropEffect();
}

export {closeUploadForm};
