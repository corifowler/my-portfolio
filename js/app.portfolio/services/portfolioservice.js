let PortfolioService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/project';

  this.getProjects = getProjects;
  this.getProject = getProject;

  function getProjects () {
    return $http.get(url, PARSE.CONFIG);
  }

  function getProject (id) {
    return $http.get(url + '/' + id, PARSE.CONFIG);
  }

};

PortfolioService.$inject = ['$http', 'PARSE'];

export default PortfolioService;