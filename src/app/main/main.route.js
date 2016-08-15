(function() {
  'use strict';

  angular
    .module('app.main')
    .config(mainRoute);

  mainRoute.$inject = ['$stateProvider'];

  function mainRoute($stateProvider) {
    $stateProvider
      .state('main', {
        // url: '',
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
        // abstract: true
      });
  }

})();
