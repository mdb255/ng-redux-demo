const _ = require('underscore');
const CarActions = require("./car-actions");
const Types = CarActions.Types;

module.exports = function (state, action) {
  var car;
  var newState = state;

  if (!newState) {
    newState = {
      carsById: {},
      allCars: [],
      nextCarId: 0,
    };
  }

  switch (action.type) {
    case Types.SET_COLOR:
      car = newState.carsById[action.carId];
      car.color = action.color;
      break;
    case Types.ADD_NEW:
      car = newState.carsById[++newState.nextCarId] = {};
      car.id = newState.nextCarId;
      car.color = action.color;
      break;
    case Types.REMOVE:
      delete newState.carsById[action.carId];
      break;
  }

  newState.allCars = _.values(newState.carsById);

  return newState;
};
