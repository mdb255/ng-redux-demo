/* Equivalent to cmp2a, but cleaned up using TargetConnector */

require('__src/redux/sheep/sheep-actions.js');
require('__src/redux/cars/car-actions.js');

// Angular 1.5 Component style syntax

angular.module("mdb255.mainApp")
  .component('cmp2b', {
    // Use a template inline from webpack using the html-loader
    // Allows for page auto-refresh when editing templates
    template: require('./cmp2b.html'),
    controller: 'Cmp2bCtrl',
  })

  .controller('Cmp2bCtrl',

    function($scope, TargetConnector, SheepActions, CarActions) {
      TargetConnector.connectToRedux($scope, "sheepModel", "sheepState", SheepActions);
      TargetConnector.connectToRedux($scope, "carModel", "carState", CarActions);

      $scope.addNewRedCar = function() {
        $scope.carModel.addNew('red');
      };
    }
  );
