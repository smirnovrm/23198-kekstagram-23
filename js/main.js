//В качестве образца для функции взял пример из
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//Получение случайного целого числа в заданном интервале, включительно
function getRandomNumber(from, to) {
  return ((from < 0 || to < 0) || (from >= to)) ? -1 : Math.floor(Math.random() * (Math.floor(to) - Math.ceil(from) + 1)) + Math.ceil(from);
}

getRandomNumber(5, 10);

function checkMaxLength(checkString, maxLength) {
  return (maxLength >= checkString.length);
}

checkMaxLength('Hello', 4);

