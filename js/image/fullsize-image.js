const COMMENT_NUMBER = 5;

const bigPictureBlock = document.querySelector('.big-picture');
const imageListComments = bigPictureBlock.querySelector('.social__comments');
const loadMoreCommentsButton = bigPictureBlock.querySelector('.comments-loader');
const bigPictureCommentsCount = bigPictureBlock.querySelector('.social__comment-count');
const picturesContainer = document.querySelector('.pictures');
let commentIndex = 0;

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
    element.classList.add('hidden');
    fragment.appendChild(element);
  });
  listComments.appendChild(fragment);
}

function onShowComments() {
  const comments = imageListComments.children;
  const commentsCount = imageListComments.children.length;
  const nextCommentIndex = (commentsCount > commentIndex + COMMENT_NUMBER) ? commentIndex + COMMENT_NUMBER : commentsCount;
  for (let index = commentIndex; index <= nextCommentIndex - 1; index++) {
    comments[index].classList.remove('hidden');
  }
  loadMoreCommentsButton.classList.toggle('hidden', commentsCount === nextCommentIndex);
  bigPictureCommentsCount.firstChild.textContent = `${nextCommentIndex} из `;
  commentIndex = nextCommentIndex;
}

function addFullImageHandler(data) {
  const pictureList = document.querySelectorAll('.picture');
  const bigPictureModal = document.querySelector('.big-picture');

  pictureList.forEach((picture, pictureIndex) => {
    picture.addEventListener('click', (evt) => {
      evt.preventDefault();
      bigPictureModal.classList.remove('hidden');
      document.body.classList.add('modal-open');
      fullsizeImage(data[pictureIndex]);
      commentIndex = 0;
      onShowComments();
      loadMoreCommentsButton.addEventListener('click', onShowComments);
    });
  });
}

export {addFullImageHandler, loadMoreCommentsButton, onShowComments, picturesContainer};
