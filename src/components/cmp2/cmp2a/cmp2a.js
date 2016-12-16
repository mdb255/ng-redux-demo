require('__src/redux/sheep/sheep-actions.js');
require('__src/redux/cars/car-actions.js');

// Angular 1.5 Component style syntax

angular.module("mdb255.mainApp")
  .component('cmp2a', {
    // Use a template inline from webpack using the html-loader
    // Allows for page auto-refresh when editing templates
    template: require('./cmp2a.html'),
    controller: 'Cmp2aCtrl',
    // Templates can refer to properties set on the "this" reference using this variable, e.g., {{stageRepo.email}}
  })

  .controller('Cmp2aCtrl',

    function($scope, $ngRedux, SheepActions, CarActions) {

      $scope.sheepModel = {};
      $scope.carModel = {};
      var disconnectSheep = $ngRedux.connect(mapSheepStateToThis, SheepActions)($scope.sheepModel);
      var disconnectCars = $ngRedux.connect(mapCarStateToThis, CarActions)($scope.carModel);

      $scope.$on('$destroy', disconnectSheep);
      $scope.$on('$destroy', disconnectCars);

      $scope.addNewRedCar = function() {
        $scope.carModel.addNew('red');
      };

      $scope.syncAll = function() {
        // Can still add callback handlers when using async actions that return promises
        $scope.sheepModel.syncAllSheep()
          .then(function() {
            console.log("after sync");
          })
      };

      function mapSheepStateToThis(store) {
        console.log("sheepState=" + JSON.stringify(store.sheepState));

        return {
          state: store.sheepState
        };
      }

      function mapCarStateToThis(store) {
        console.log("carState=" + JSON.stringify(store.carState));

        return {
          state: store.carState
        };
      }
    }
  //]
  );
