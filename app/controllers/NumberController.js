export class NumberController {
  #model;
  #view;

  constructor(model, view) {
    this.#model = model;
    this.#view = view;
    this.#model.registerOnChangeCallback((value) =>
      this.#view.updateRender(value)
    );
  }
}
