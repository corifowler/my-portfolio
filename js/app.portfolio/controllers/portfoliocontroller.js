let PortfolioController = function(PortfolioService, $state) {

  let vm = this;

  vm.projects = [];
  
  PortfolioService.getProjects().then( (res) => {
    vm.projects = res.data.results;
  });


};

PortfolioController.$inject = ['PortfolioService', '$state'];

export default PortfolioController;