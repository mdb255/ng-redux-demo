var Redux = require('__npm/redux/dist/redux.js');
var ReduxThunk = require('redux-thunk');

// Traditional 1.x Directive syntax

angular.module("mdb255.mainApp", [
  'ui.router',
  'ngResource',
  'ngRedux',
])

.config(function($ngReduxProvider) {
  /*
  const thunk = function(store) {
    return function(next) {
      return function(action) {
        typeof action === 'function' ?
          action(store.dispatch, store.getStore) :
          next(action);
      }
    }
  };
  */

  const rootReducer = Redux.combineReducers({
    sheepState: require('__src/redux/sheep/sheep-reducer.js'),
    carState: require('__src/redux/cars/car-reducer.js'),
  });

  const middleware = [
    ReduxThunk.default,
  ];

  $ngReduxProvider.createStoreWith(rootReducer, middleware);
})

.directive('mainApp', [
  function() {
    return {
      restrict: 'E',
      template: require('./main-app.html'),
      controller: 'MainAppCtrl',
    };
  }
])

.controller('MainAppCtrl', ["$scope", function($scope) {
  $scope.url = 'cmp1';

  $scope.activeState = "cmp1";

  $scope.pages = [
    { state: "cmp1", label: "Component 1" },
    { state: "cmp2", label: "Component 2" },
  ];

  $scope.activateState = function(page) {
    $scope.activeState = page.state;
  };
}]);
