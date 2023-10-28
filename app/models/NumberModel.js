export class NumberModel {
  __value;
  __callback;

  constructor(value) {
    this.__value = value;
  }

  get value() {
    return this.__value;
  }

  increment() {
    this.__value += 1;
    this.__callback(this.__value);
  }

  decrement() {
    this.__value -= 1;
    this.__callback(this.__value);
  }

  registerOnChangeCallback(callback) {
    this.__callback = callback;
  }
}
