import angular from 'angular';

import '../app.core/index';

import PortfolioController from './controllers/portfoliocontroller';
import SingleController from './controllers/singlecontroller';

import PortfolioService from './services/portfolioservice';

angular
  .module('app.portfolio', ['app.core'])
  .service('PortfolioService', PortfolioService)
  .controller('PortfolioController', PortfolioController)
  .controller('SingleController', SingleController)
;