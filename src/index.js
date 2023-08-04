import ErrorRepository from './js/ErrorRepository';

const error = new ErrorRepository(3545345, 'Какая-то известная ошибка');

console.log(error);
console.log(error.translate(3545345));
console.log(error.translate(35455));
