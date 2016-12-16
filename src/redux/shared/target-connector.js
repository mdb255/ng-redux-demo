angular.module("mdb255.mainApp")
  .factory('TargetConnector', function($ngRedux) {

    return {
      connectToRedux: connectToRedux,
    };

    function connectToRedux(target, modelName, storeStateName, actions) {
      target[modelName] = {};

      var disconnect = $ngRedux.connect(mapStateToTarget, actions)(target[modelName]);
      target.$on('$destroy', disconnect);

      function mapStateToTarget(store) {
        console.log(storeStateName + "=" + JSON.stringify(store[storeStateName]));

        return {
          state: store[storeStateName]
        };
      }
    }
  });