import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._validateNumber(floors, 'Number of floors must be a number');
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }

  _validateNumber(value, errorMessage) {
    if (typeof value !== 'number') {
      throw new TypeError(errorMessage);
    }
    return this;
  }
}
