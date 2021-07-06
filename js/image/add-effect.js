const imagePreview = document.querySelector('.img-upload__preview');
const effectLevel = document.querySelector('.effect-level');
const effectLevelSlider = effectLevel.querySelector('.effect-level__slider');
const effectLevelValue = effectLevel.querySelector('.effect-level__value');

effectLevel.style.display = 'none';

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

function addEffect(evt) {
  const effectName = evt.target.value;

  effectLevel.style.display = 'none';

  if (effectName !== 'none') {
    effectLevel.style.display = 'block';
  }

  if (effectName === 'chrome') {
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
    imagePreview.classList.add('effects__preview--chrome');
    effectLevelSlider.noUiSlider.on('update', (_, handle, unencoded) => {
      imagePreview.style.filter = `grayscale(${unencoded[handle]})`;
      effectLevelValue.value = unencoded[handle];
    });
  }else if (effectName === 'sepia') {
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
    imagePreview.classList.add('effects__preview--sepia');
    effectLevelSlider.noUiSlider.on('update', (_, handle, unencoded) => {
      imagePreview.style.filter = `sepia(${unencoded[handle]})`;
      effectLevelValue.value = unencoded[handle];
    });
  }else if (effectName === 'marvin') {
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    });
    imagePreview.classList.add('effects__preview--marvin');
    effectLevelSlider.noUiSlider.on('update', (_, handle, unencoded) => {
      imagePreview.style.filter = `invert(${unencoded[handle]}%)`;
      effectLevelValue.value = unencoded[handle];
    });
  }
  else if (effectName === 'phobos') {
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
    imagePreview.classList.add('effects__preview--phobos');
    effectLevelSlider.noUiSlider.on('update', (_, handle, unencoded) => {
      imagePreview.style.filter = `blur(${unencoded[handle]}px)`;
      effectLevelValue.value = unencoded[handle];
    });
  }else if (effectName === 'heat') {
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
    imagePreview.classList.add('effects__preview--heat');
    effectLevelSlider.noUiSlider.on('update', (_, handle, unencoded) => {
      imagePreview.style.filter = `brightness(${unencoded[handle]})`;
      effectLevelValue.value = unencoded[handle];
    });
  }
  else if (effectName === 'none') {
    imagePreview.classList.remove('effects__preview--chrome', 'effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat');
    imagePreview.style.filter = 'unset';
    effectLevelValue.value = '';
  }
}

export {addEffect};
