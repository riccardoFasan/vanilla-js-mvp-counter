export class NumberController {
  __model;
  __view;

  constructor(model, view) {
    this.__model = model;
    this.__view = view;
    this.__model.registerOnChangeCallback((value) =>
      this.__view.updateRender(value)
    );
  }
}
