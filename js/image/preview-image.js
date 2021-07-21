const pictureList = document.querySelector('.pictures');

function previewImage(data) {
  const pictures = document.querySelector('.pictures');
  const templateFragment = document.querySelector('#picture').content;
  const template = templateFragment.querySelector('.picture');
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < data.length; i++) {
    const element = template.cloneNode(true);
    element.querySelector('.picture__img').src = data[i].url;
    element.querySelector('.picture__likes').textContent = data[i].likes;
    element.querySelector('.picture__comments').textContent = data[i].comments.length;
    fragment.appendChild(element);
  }

  pictures.appendChild(fragment);
}

export {previewImage, pictureList};
