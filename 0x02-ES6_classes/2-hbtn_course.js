export default class HolbertonCourse {
  constructor(name, length, students) {
    this._validateString(name, 'Name must be a string');
    this._validateNumber(length, 'Length must be a number');
    this._validateArrayOfString(students, 'Students must be an array of strings');
    this._name = name;
    this._length = length;
    this._students = students;
  }

  this._validateString(value, errorMessage) {
    if (typeof value !== 'string') {
      throw new TypeError(errorMessage);
    }
  }

  this._validateNumber(value, errorMessage) {
    if (typeof value !== 'number') {
      throw new TypeError(errorMessage);
    }
  }

  this._validateArrayOfString(value, errorMessage) {
    if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
      throw new TypeError(errorMessage);
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._validateString(value, 'Name must be a string');
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._validateNumber(value, 'Length must be a number');
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    this._validateArrayOfString(value, 'Students must be an array of strings');
    this._students = value;
  }
}
