export class NumberView {
  ref;
  #model;

  constructor(ref, model) {
    this.ref = ref;
    this.#model = model;
    this.__render();
  }

  __render() {
    this.ref.innerHTML = `
      <div class="number-view">
        <button class="number-view__decrement">- Decrement</button>
        <div class="${this.#getValueStyle()}">
            ${this.#model.value}
        </div>
        <button class="number-view__increment">+ Increment</button>
      </div>
    `;

    this.ref
      .querySelector('.number-view__decrement')
      .addEventListener('click', () => this.#model.decrement());

    this.ref
      .querySelector('.number-view__increment')
      .addEventListener('click', () => this.#model.increment());
  }

  updateRender(value) {
    const valueRef = this.ref.querySelector('.number-view__value');
    valueRef.innerText = value;
    valueRef.setAttribute('class', this.#getValueStyle());
  }

  #getValueStyle() {
    const modifier = this.#getValueStyleModifier();
    return `number-view__value number-view__value__${modifier}`;
  }

  #getValueStyleModifier() {
    if (this.#model.value > 0) return 'positive';
    if (this.#model.value < 0) return 'negative';
    return 'neutral';
  }
}
