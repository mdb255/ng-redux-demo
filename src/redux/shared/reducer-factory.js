/* Probably won't use this */

module.exports = {
  createSimpleActionsHandler: createSimpleActionsHandler,
};

/*
 Create a simple Reducer that maps Action Types to individual State reducer functions, and initializes a default state if none is set
 */

function createSimpleActionsHandler(actionHandlersByType, defaultState) {
  return function (state, action) {
    if (!state && defaultState) {
      state = defaultState;
    }

    var actionHandlerForType = actionHandlersByType[action.type];
    var resultingState;

    if (actionHandlerForType) {
      resultingState = actionHandlerForType(state, action);
    }

    // Action handlers are not required to return a value - result is the (probably mutated) state by default
    if (!resultingState) {
      resultingState = state;
    }

    return resultingState;
  };
}
