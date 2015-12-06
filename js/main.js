import angular from 'angular';

import './app.core/index';
import './app.portfolio/index';

angular
  .module('app', ['app.core', 'app.portfolio'])
;