console.log('worked');

export default class ErrorRepository {
  constructor() {
    this.error = new Map();
    this.error.set(1, 'descriptionErr1');
    this.error.set(2, 'descriptionErr2');
    this.error.set(3, 'descriptionErr3');
  }

  translate(code) {
    let result;
    if (this.error.get(code)) {
      result = this.error.get(code);
    } else {
      result = 'Unknown error';
    }
    return result;
  }
}

// const test = new ErrorRepository();
// console.log('консоль', test.translate(11));
