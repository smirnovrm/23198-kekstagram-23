import {getFilterMostDiscussed, getFilterDefault, getFilterRandom, filterRandom, filterDiscussed, filterDefault, blockFilters} from '../data/add-filter.js';
import {debounce} from '../utils/debounce.js';
import {picturesContainer} from '../image/fullsize-image.js';

const DELAY_TIME = 500;

function uploadData(preview, onPictureHandler, onError) {

  fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response;
      }

      throw new Error(`Ошибка загрузки данных. ${response.status} - ${response.statusText}`);
    })
    .then((response) => response.json())
    .then((posts) => {
      preview(posts);
      blockFilters.classList.remove('img-filters--inactive');
      filterDefault.addEventListener('click', debounce(getFilterDefault(posts), DELAY_TIME));
      filterRandom.addEventListener('click', debounce(getFilterRandom(posts), DELAY_TIME));
      filterDiscussed.addEventListener('click', debounce(getFilterMostDiscussed(posts), DELAY_TIME));
      picturesContainer.addEventListener('click', onPictureHandler(posts));
    })
    .catch((error) => {
      onError(error);
    });
}

export {uploadData};
