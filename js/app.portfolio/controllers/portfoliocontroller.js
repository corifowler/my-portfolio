let PortfolioController = function(PortfolioService) {

  let vm = this;

  vm.projects = [];
  
  PortfolioService.getProjects().then( (res) => {
    vm.projects = res.data.results;
  });

};

PortfolioController.$inject = ['PortfolioService'];

export default PortfolioController;