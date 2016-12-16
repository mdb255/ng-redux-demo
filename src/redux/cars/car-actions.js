const ActionCreatorFactory = require("../shared/action-creator-factory.js");

/* Prefer this form of keeping the Action types and creators in a single file */

const Types = {
  SET_COLOR: "SET_COLOR",
  ADD_NEW: "ADD_NEW",
  REMOVE: "REMOVE",
};

angular.module("mdb255.mainApp")
  .factory('CarActions', function() {

    return {
      setColor: ActionCreatorFactory.createSimple(Types.SET_COLOR, "carId", "color"),
      addNew: ActionCreatorFactory.createSimple(Types.ADD_NEW, "color"),
      remove: ActionCreatorFactory.createSimple(Types.REMOVE, "carId"),
    };
  });

module.exports = {
  Types: Types
};
