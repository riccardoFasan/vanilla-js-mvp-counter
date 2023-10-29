export class NumberModel {
  #value;
  #callback;

  constructor(value) {
    this.#value = value;
  }

  get value() {
    return this.#value;
  }

  increment() {
    this.#value += 1;
    this.#callback(this.#value);
  }

  decrement() {
    this.#value -= 1;
    this.#callback(this.#value);
  }

  registerOnChangeCallback(callback) {
    this.#callback = callback;
  }
}
