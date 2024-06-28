import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._validateNumber(amount, 'Amount must be a number');
    this._validateCurrencyInstance(currency, 'Currency must be an instance of Currency');

    this._amount = amount;
    this._currency = currency;
  }

  _validateNumber(value, errorMessage) {
    if (typeof value !== 'number') {
      throw new TypeError(errorMessage);
    }
    return this;
  }

  _validateCurrencyInstance(value, errorMessage) {
    if (!(value instanceof Currency)) {
      throw new TypeError(errorMessage);
    }
    return this;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._validateNumber(value, 'Amount must be a number');
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._validateCurrencyInstance(value, 'Currency must be an instance of Currency');
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }
}
