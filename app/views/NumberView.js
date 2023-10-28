export class NumberView {
  ref;
  __model;

  constructor(ref, model) {
    this.ref = ref;
    this.__model = model;
    this.__render();
  }

  __render() {
    this.ref.innerHTML = `
      <div class="number-view">
        <button class="number-view__decrement">- Decrement</button>
        <div class="${this.__getValueStyle()}">
            ${this.__model.value}
        </div>
        <button class="number-view__increment">+ Increment</button>
      </div>
    `;

    this.ref
      .querySelector('.number-view__decrement')
      .addEventListener('click', () => this.__model.decrement());

    this.ref
      .querySelector('.number-view__increment')
      .addEventListener('click', () => this.__model.increment());
  }

  updateRender(value) {
    const valueRef = this.ref.querySelector('.number-view__value');
    valueRef.innerText = value;
    valueRef.setAttribute('class', this.__getValueStyle());
  }

  __getValueStyle() {
    const modifier = this.__getValueStyleModifier();
    return `number-view__value number-view__value__${modifier}`;
  }

  __getValueStyleModifier() {
    if (this.__model.value > 0) return 'positive';
    if (this.__model.value < 0) return 'negative';
    return 'neutral';
  }
}
