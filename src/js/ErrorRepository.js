// создаем экземпляр Map
export const map = new Map();

export default class ErrorRepository {
  constructor(errorCode, errorMessage) {
   
      if (typeof errorCode !== 'number') {
        throw new Error('Код ошибки должен быть числом. Пжлста, попробуйте еще раз');
      }
      this.errorCode = errorCode;
      this.errorMessage = errorMessage;
      map.set(errorCode, errorMessage);
    
  }

  translate(code) {
    return map.has(code) ? map.get(code) : 'Unknown Error';
  }
}
