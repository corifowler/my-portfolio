let PortfolioService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/project';

  this.getProjects = getProjects;

  function getProjects () {
    return $http.get(url, PARSE.CONFIG);
  }

};

PortfolioService.$inject = ['$http', 'PARSE'];

export default PortfolioService;