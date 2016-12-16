module.exports = {
  createSimple: createSimple,
};

/*
Create a simple Action Creator that takes a list of args and sets each of them as a property on the Action, e.g.:

// This call
createSimple(Types.SET_COLOR, "carId", "color")

// Effectively returns
function(carId, color) {
  return {
    type: Types.SET_COLOR,
    carId: carId,
    color: color,
  };
}

First argument passed to createSimple is the Action type, followed by any number of Action prop names
*/

function createSimple(type) {
  var actionPropNames = Array.prototype.slice.call(arguments, 1);

  return function() {
    var innerReturnVal = { type: type };

    for (var i = 0; i < arguments.length; i++) {
      innerReturnVal[actionPropNames[i]] = arguments[i];
    }
    return innerReturnVal;
  }
}
