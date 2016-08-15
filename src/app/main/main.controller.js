(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('MainController', MainController);

  MainController.$inject = [];

  function MainController() {
    var vm = this;

    // Data
    vm.title = 'ngStarter';

  }
})();
