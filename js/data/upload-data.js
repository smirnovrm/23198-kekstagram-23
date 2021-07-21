import {getFilterMostDiscussed, getFilterDefault, getFilterRandom, filterRandom, filterDiscussed, filterDefault, blockFilters} from '../data/add-filter.js';
import {debounce} from '../utils/debounce.js';
import {picturesContainer} from '../image/fullsize-image.js';

function uploadData(preview, pictureHandler, onError) {

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
      filterDefault.addEventListener('click', debounce(getFilterDefault(posts), 500));
      filterRandom.addEventListener('click', debounce(getFilterRandom(posts), 500));
      filterDiscussed.addEventListener('click', debounce(getFilterMostDiscussed(posts), 500));
      picturesContainer.addEventListener('click', pictureHandler(posts));
    })
    .catch((error) => {
      onError(error);
    });
}

export {uploadData};
