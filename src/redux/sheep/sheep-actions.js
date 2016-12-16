require("__src/services/sheep-api.js");

const ActionCreatorFactory = require("../shared/action-creator-factory.js");
const Types = require("./sheep-action-types");

angular.module("mdb255.mainApp")
  .factory('SheepActions', function(SheepApi) {

    return {
      incrementCount: ActionCreatorFactory.createSimple(Types.INCREMENT_COUNT),
      decrementCount: ActionCreatorFactory.createSimple(Types.DECREMENT_COUNT),
      setCount: ActionCreatorFactory.createSimple(Types.SET_COUNT, "count"),
      syncAllSheep: syncAllSheep,
    };

    function syncAllSheep() {
      // ASYNC ACTION to perform an API call before dispatching a sync action to update the store
      // The Thunk middleware detects that this action returns a function, and calls it passing a reference to store.dispatch
      return function(dispatch, getStore) {
        console.log("getStore=" + Object.keys(getStore()));
        return SheepApi.getAllSheep()
          .then(function(data) {
            dispatch({
              type: Types.CACHE_ALL,
              freshItems: data,
            });
          });
      };
    }
  });
