(function() {
  'use strict';

  angular
    .module('app.core')
    .config(coreConfig);

  coreConfig.$inject = ['$urlRouterProvider'];

  function coreConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }

})();
