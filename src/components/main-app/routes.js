angular.module("mdb255.mainApp")

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/cmp1');

    $stateProvider
      .state('cmp1', {
        url: '/cmp1',
        template: '<cmp1></cmp1>'
      })
      .state('cmp2', {
        url: '/cmp2',
        template: '<cmp2></cmp2>'
      });
  }]);