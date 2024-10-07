import './css/style.scss';
import { displayNav, displayFooter } from './structure';
import { start } from './start';

function initializer() {
  displayNav();
  start();
  displayFooter();
}

initializer();
