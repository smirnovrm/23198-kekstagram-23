const MAX_COMMENT_LENGTH = 140;
const MAX_HASHTAG_NUMBER = 5;

function validComment() {
  document.querySelector('.text__description').addEventListener('input', (evt) => {
    const commentLength = evt.target.value.length;

    if (commentLength > MAX_COMMENT_LENGTH) {
      evt.target.setCustomValidity(`Удалите лишние ${commentLength - MAX_COMMENT_LENGTH} симв.`);
    }else {
      evt.target.setCustomValidity('');
    }

    evt.target.reportValidity();
  });

}

function validTag () {
  document.querySelector('.text__hashtags').addEventListener('input', (evt) => {
    const hashtagsList = evt.target.value.split([' ']).filter(String);

    hashtagsList.forEach((value, index) => {
      if (value[0] !== '#') {
        evt.target.setCustomValidity(`Хэштег '${hashtagsList[index]}' должен начинаться с #`);
      }else if (hashtagsList.length > MAX_HASHTAG_NUMBER) {
        evt.target.setCustomValidity(`Максимальное количество тегов ${MAX_HASHTAG_NUMBER}`);
      }else if (!value.match(/^#[A-Za-zА-Яа-я0-9]{0,19}$/g)) {
        evt.target.setCustomValidity('Хэштег не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи');
      }else if (!(hashtagsList.indexOf(value) === index)) {
        evt.target.setCustomValidity('Дубликат');
      }else {
        evt.target.setCustomValidity('');
      }
    });

    evt.target.reportValidity();
  });
}

export {validComment, validTag};
