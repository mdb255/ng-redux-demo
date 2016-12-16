const Types = require("./car-old-action-types");
const _ = require('__npm/underscore/underscore.js');

module.exports = function (state, action) {
  var car;

  if (!state) {
    state = {
      carsById: {},
      allCars: [],
      nextCarId: 0,
    };
  }

  switch (action.type) {
    case Types.SET_COLOR:
      car = state.carsById[action.carId];
      car.color = action.color;
      state.allCars = _.values(state.carsById);
      break;
    case Types.ADD_NEW:
      car = state.carsById[++state.nextCarId] = {};
      car.id = state.nextCarId;
      car.color = action.color;
      state.allCars = _.values(state.carsById);
      break;
    case Types.REMOVE:
      delete state.carsById[action.carId];
      state.allCars = _.values(state.carsById);
      break;
  }

  return state;
};
