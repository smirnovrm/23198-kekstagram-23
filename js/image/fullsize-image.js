function fullsizeImage(data) {
  document.querySelector('.big-picture__img img').src = data.url;
  document.querySelector('.likes-count').textContent = data.likes;
  document.querySelector('.comments-count').textContent = data.comments.length;
  document.querySelector('.social__caption').textContent = data.description;

  const listComments = document.querySelector('.social__comments');
  listComments.innerHTML = '';
  data.comments.forEach((comment) => {
    listComments.innerHTML += `<li class="social__comment">
                              <img
                                  class="social__picture"
                                  src="${comment.avatar}"
                                  alt="${comment.name}"
                                  width="35" height="35">
                              <p class="social__text">${comment.message}</p>
                            </li>`;
  });
}

export {fullsizeImage};
