angular.module("mdb255.mainApp")
  .factory('SheepApi', function($resource, $q, $timeout) {

    return {
      getAllSheep: getAllSheep,
    };

    function getAllSheep() {
      var deferred = $q.defer();

      $timeout(function() {
        var data = [
          { name: "Bob", age: "7" },
          { name: "Wilma", age: "4" },
        ];

        deferred.resolve(data);
      }, 1000);

      return deferred.promise;
    }
  });
