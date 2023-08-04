// создаем экземпляр Map
export const map = new Map();

export default class ErrorRepository {
  constructor(errorCode, errorMessage) {
    try {
      if (typeof errorCode !== 'number') {
        throw new Error('Код ошибки должен быть числом. Пжлста, попробуйте еще раз');
      }
      this.errorCode = errorCode;
      this.errorMessage = errorMessage;
      map.set(errorCode, errorMessage);
    } catch (error) {
      console.log(`${error.name}: ${error.message}`);
    }
  }

  translate(code) {
    return map.has(code) ? map.get(code) : 'Unknown Error';
  }
}
