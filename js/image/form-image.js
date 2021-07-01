const MAX_COMMENT_LENGTH = 140;
const MAX_HASHTAG_NUMBER = 5;
const HASHTAG_REG_EXP = /^#[A-Za-zА-Я-а-яЁё0-9]{1,19}$/;

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
    const hashtagsList = evt.target.value.toLowerCase().split([' ']).filter(String);
    const validHashtags = hashtagsList.every((hashtag) => HASHTAG_REG_EXP.test(hashtag));

    if (hashtagsList.length > MAX_HASHTAG_NUMBER) {
      evt.target.setCustomValidity(`Максимальное количество тегов ${MAX_HASHTAG_NUMBER}`);
    }else if (!validHashtags) {
      evt.target.setCustomValidity('Хэштег не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи');
    }else if (hashtagsList.length !== new Set(hashtagsList).size) {
      evt.target.setCustomValidity('Дубликат');
    }else {
      evt.target.setCustomValidity('');
    }

    evt.target.reportValidity();
  });
}

export {validComment, validTag};
