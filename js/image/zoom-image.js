const zoomInput = document.querySelector('.scale__control--value');
let zoomValue = Number(zoomInput.value.slice(0, -1));
const imagePreview = document.querySelector('.img-upload__preview');

function zoomImageUp(evt) {
  evt.preventDefault();
  if(zoomValue < 100) {
    zoomValue += 25;
    zoomInput.value = `${zoomValue} %`;
    imagePreview.style.transform = `scale(${zoomValue / 100})`;
  }
}

function zoomImageDown(evt) {
  evt.preventDefault();
  if(zoomValue > 25) {
    zoomValue -= 25;
    zoomInput.value = `${zoomValue} %`;
    imagePreview.style.transform = `scale(${zoomValue / 100})`;
  }
}

export {zoomImageUp, zoomImageDown};
