import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import './modules/init-map';
import './modules/init-phone-mask';
import './modules/init-menu';
import './modules/init-validation';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {
    initModals();
  });
});
