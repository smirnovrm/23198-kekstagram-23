import {createPostPhoto} from './data/create-post-photo.js';
import {previewImage} from './image/preview-image.js';

const COUNT_POST_PHOTO = 25;
const MAX_COUNT_COMMENT = 3;

previewImage(createPostPhoto(COUNT_POST_PHOTO, MAX_COUNT_COMMENT));
