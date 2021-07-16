function fullsizeImage(data) {
  document.querySelector('.big-picture__img img').src = data.url;
  document.querySelector('.likes-count').textContent = data.likes;
  document.querySelector('.comments-count').textContent = data.comments.length;
  document.querySelector('.social__caption').textContent = data.description;

  const listComments = document.querySelector('.social__comments');
  const listComment = listComments.querySelector('.social__comment').cloneNode(true);
  const fragment = document.createDocumentFragment();
  listComments.textContent = '';

  data.comments.forEach((comment) => {
    const element = listComment.cloneNode(true);
    element.querySelector('.social__picture').src = comment.avatar;
    element.querySelector('.social__picture').alt = comment.name;
    element.querySelector('.social__text').textContent = comment.message;
    fragment.appendChild(element);
  });
  listComments.appendChild(fragment);
}

function addFullImageHandler(data) {
  const pictureList = document.querySelectorAll('.picture');
  const bigPictureModal = document.querySelector('.big-picture');
  const commentCount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');
  pictureList.forEach((picture, pictureIndex) => {
    picture.addEventListener('click', (evt) => {
      evt.preventDefault();
      bigPictureModal.classList.remove('hidden');
      document.body.classList.add('modal-open');
      fullsizeImage(data[pictureIndex]);
      commentCount.classList.add('hidden');
      commentsLoader.classList.add('hidden');
    });
  });
}

export {addFullImageHandler};
