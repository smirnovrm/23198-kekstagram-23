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

const effectsSettingList = {
  chrome: {
    min: 0,
    max: 1,
    start: 1,
    step: 0.1,
    className: 'effects__preview--chrome',
    filterName: 'grayscale',
    unit: '',
  },
  sepia: {
    min: 0,
    max: 1,
    start: 1,
    step: 0.1,
    className: 'effects__preview--sepia',
    filterName: 'sepia',
    unit: '',
  },
  marvin: {
    min: 0,
    max: 100,
    start: 100,
    step: 1,
    className: 'effects__preview--marvin',
    filterName: 'invert',
    unit: '%',
  },
  phobos: {
    min: 0,
    max: 3,
    start: 3,
    step: 0.1,
    className: 'effects__preview--phobos',
    filterName: 'blur',
    unit: 'px',
  },
  heat: {
    min: 1,
    max: 3,
    start: 3,
    step: 0.1,
    className: 'effects__preview--heat',
    filterName: 'brightness',
    unit: '',
  },
  none: {
    className: ['effects__preview--chrome', 'effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat'],
    filterName: 'unset',
  },
};

function checkEffect(effect){

  if (effect === 'none') {
    imagePreview.classList.remove(effectsSettingList[effect].className);
    imagePreview.style.filter = effectsSettingList[effect].filterName;
    effectLevelValue.value = '';
  }else {
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: effectsSettingList[effect].min,
        max: effectsSettingList[effect].max,
      },
      start: effectsSettingList[effect].start,
      step: effectsSettingList[effect].step,
    });
    imagePreview.classList.add(effectsSettingList[effect].className);
    effectLevelSlider.noUiSlider.on('update', (_, handle, unencoded) => {
      imagePreview.style.filter = `${effectsSettingList[effect].filterName}(${unencoded[handle]}${effectsSettingList[effect].unit})`;
      effectLevelValue.value = unencoded[handle];
    });
  }
}

function addEffect(evt) {
  const effectName = evt.target.value;
  effectLevel.style.display = 'none';
  effectLevel.style.display = effectName !== 'none' ? 'block' : 'none';
  checkEffect(effectName);
}

function dropEffect() {
  imagePreview.classList.remove('effects__preview--chrome', 'effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat');
  imagePreview.style.filter = 'unset';
  effectLevelValue.value = '';
  effectLevel.style.display = 'none';
  document.querySelector('#effect-none').checked = true;
}

export {addEffect, dropEffect};
