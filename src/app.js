import './view/style.css';
import 'normalize.css';
import MainController from './controller/mainController';

const mainController = new MainController();
mainController.initSearchBar();
mainController.initSettings();
mainController.initWelcome();
