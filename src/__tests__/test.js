import ErrorRepository from '../js/ErrorRepository';

//! ---------------Тестируем try/catch ------------------------------------
test('ErrorRepository try/catch testing', () => {
  expect(() => {
    new ErrorRepository('3545345', 'Какая-то известная ошибка');
  })
    .toThrow('Код ошибки должен быть числом. Пжлста, попробуйте еще раз');
});
//! -----------------------------------------------------------------------

test('ErrorRepository Constructor test', () => {
  const error = new ErrorRepository(3545345, 'Какая-то известная ошибка');
  const result = { errorCode: 3545345, errorMessage: 'Какая-то известная ошибка' };

  expect(result).toEqual(error);
});

test('ErrorRepository translate(known_code) test', () => {
  const error = new ErrorRepository(3545345, 'Какая-то известная ошибка');
  const result = 'Какая-то известная ошибка';

  expect(result).toEqual(error.translate(3545345));
});

test('ErrorRepository translate(unknown_code) test', () => {
  const error = new ErrorRepository(3545345, 'Какая-то известная ошибка');
  const result = 'Unknown Error';

  expect(result).toEqual(error.translate(22424));
});
