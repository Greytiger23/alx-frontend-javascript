export default class Currency {
  constructor(code, name) {
    this._validateString(code, 'Code must be a string');
    this._validateString(name, 'Name must be a string');

    this.code = code;
    this.name = name;
  }

  _validateString(value, errorMessage) {
    if (typeof value !== 'string') {
      throw new TypeError(errorMessage);
    }
    return this;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._validateString(value, 'Code must be a string');
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._validateString(value, 'Name must be a string');
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
