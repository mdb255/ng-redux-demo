/* Probably won't use this */

module.exports = {
  reduceWithActionsHandler: reduceWithActionsHandler,
};

/*
 Reduce state using individual reducer functions each mapped to an Action Type, and initialize a default state if none is set
 */

function reduceWithActionsHandler(state, action, actionHandlersByType, defaultState) {
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
}
