let SingleController = function(PortfolioService, $state, $stateParams) {

  let vm = this;

  vm.project = {};

  let id = $stateParams.id;

  PortfolioService.getProject(id).then( (res) => {
    vm.project = res.data;
  });

};

SingleController.$inject = ['PortfolioService', '$state', '$stateParams'];

export default SingleController;