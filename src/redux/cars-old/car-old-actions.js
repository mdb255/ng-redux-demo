const Types = require("./car-old-action-types");

module.exports = {

  setColor: function(carId, color) {
    return {
      type: Types.SET_COLOR,
      carId: carId,
      color: color,
    };
  },

  addNew: function(color) {
    return {
      type: Types.ADD_NEW,
      color: color,
    };
  },

  remove: function(carId) {
    return {
      type: Types.REMOVE,
      carId: carId,
    };
  },
};
