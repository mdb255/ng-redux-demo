const Types = require("./sheep-action-types");
const ReducerHelper = require("../shared/reducer-helper");

module.exports = function (state, action) {

  /*
  Example of another way to structure the Reducer. Not really that much better than the case statement.
   */

  var defaultState =  { count: 0 };

  // Actions handler
  var ah = {};

  ah[Types.SET_COUNT] = function() {
    console.log(Types.SET_COUNT);
    state.count = action.count;
  };

  ah[Types.INCREMENT_COUNT] = function() {
    state.count++;
  };

  ah[Types.DECREMENT_COUNT] = function() {
    state.count--;
  };

  ah[Types.CACHE_ALL] = function() {
    console.log(Types.CACHE_ALL);
  };

  return ReducerHelper.reduceWithActionsHandler(state, action, ah, defaultState);

  // if (!state) {
  //   state = { count: 0 };
  // }
  //
  // switch (action.type) {
  //   case Types.SET_COUNT:
  //     console.log(Types.SET_COUNT);
  //     state.count = action.count;
  //     break;
  //   case Types.INCREMENT_COUNT:
  //     state.count++;
  //     break;
  //   case Types.DECREMENT_COUNT:
  //     state.count--;
  //     break;
  //   case Types.CACHE_ALL:
  //     console.log(Types.CACHE_ALL);
  //     break;
  // }
  //
  // return state;
};
