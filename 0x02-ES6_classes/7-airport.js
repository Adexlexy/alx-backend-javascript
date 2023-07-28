/* eslint-disable no-underscore-dangle */
export default class Airport {
  constructor(name, code) {
    // eslint-disable-next-line no-underscore-dangle
    this._name = name;
    this._code = code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
