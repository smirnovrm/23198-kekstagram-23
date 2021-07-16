// function addErrorBox(error){
//   const body = document.querySelector('body');
//   const errorBox = document.createElement('div');
//   errorBox.textContent = error;
//   errorBox.style.position = 'absolute';
//   errorBox.style.top = '30%';
//   errorBox.style.left = 'calc(50% - 150px)';
//   errorBox.style.border = '10px solid red';
//   errorBox.style.minWidth = '200px';
//   errorBox.style.padding = '50px';
//   errorBox.style.backgroundColor = '#000';
//   body.appendChild(errorBox);
// }

function uploadImage(data, onSuccess, onError) {
  fetch(
    'https://23.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body: data,
    })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    })
    .catch(() => {
      onError();
    });
}

export {uploadImage};
