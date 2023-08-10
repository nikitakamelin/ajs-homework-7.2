import ErrorRepository from '../js/ErrorRepository';

//! ---------------Тестируем try/catch ------------------------------------
test('ErrorRepository Not a Number testing', () => {
  expect(() => {
    new ErrorRepository('3545345', 'Какая-то известная ошибка');
  })
    .toThrow('Код ошибки должен быть числом. Пжлста, попробуйте еще раз');
});
//! -----------------------------------------------------------------------

test('ErrorRepository Constructor test', () => {
  const error = new ErrorRepository(3545345, 'Какая-то известная ошибка');

  //! --- Если хотим проверить, правильно ли установлены свойства, 
  //! --- мы должны сравнивать их напрямую
  expect(error.errorCode).toEqual(3545345);
  expect(error.errorMessage).toEqual('Какая-то известная ошибка');
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
