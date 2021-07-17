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
