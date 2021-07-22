const MESSAGE_SHOW_TIME = 5000;
const ESC_KEY_CODE = 27;

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const messageType = {
  success: successTemplate,
  error: errorTemplate,
};

function addErrorBox(error) {
  const body = document.querySelector('body');
  const errorBox = document.createElement('div');
  errorBox.textContent = error;
  errorBox.style.position = 'absolute';
  errorBox.style.top = '30%';
  errorBox.style.left = 'calc(50% - 150px)';
  errorBox.style.border = '10px solid red';
  errorBox.style.minWidth = '200px';
  errorBox.style.padding = '50px';
  errorBox.style.backgroundColor = '#000';
  body.appendChild(errorBox);

  setTimeout(() => {
    errorBox.remove();
  }, MESSAGE_SHOW_TIME);
}

function hideMessageModal() {
  const messagePopup = document.querySelector('.success') || document.querySelector('.error');
  if (messagePopup) {
    messagePopup.remove();
  }
}

function onDocumentEvent(evt) {
  if (!evt.target.closest('.success__inner') && !evt.target.closest('.error__inner')) {
    hideMessageModal();
  }

  if (evt.keyCode === ESC_KEY_CODE) {
    evt.preventDefault();
    hideMessageModal();
  }

  document.removeEventListener('click', onDocumentEvent);
  document.removeEventListener('keydown', onDocumentEvent);
}

function onMessageModalButtonClick() {
  hideMessageModal();
}

function renderMessageModal(type) {
  const messagePopup = messageType[type].cloneNode(true);
  document.body.appendChild(messagePopup);
  const messagePopupButton = messagePopup.querySelector('button');
  messagePopupButton.addEventListener('click', onMessageModalButtonClick);
  document.addEventListener('click', onDocumentEvent);
  document.addEventListener('keydown', onDocumentEvent);
}

export {addErrorBox, renderMessageModal};
