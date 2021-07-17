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
      pictureHandler(posts);
    })
    .catch((error) => {
      onError(error);
    });
}

export {uploadData};
