import { NumberModel } from './models/NumberModel.js';
import { NumberView } from './views/NumberView.js';
import { NumberController } from './controllers/NumberController.js';

const numberViewRef = document.querySelector('#number-view');

const numberModel = new NumberModel(0);
const numberView = new NumberView(numberViewRef, numberModel);
const numberController = new NumberController(numberModel, numberView);
