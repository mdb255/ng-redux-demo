// Angular 1.5 Component style syntax

angular.module("mdb255.mainApp")
  .component('cmp1', {
    // Use a template inline from webpack using the html-loader
    // Allows for page auto-refresh when editing templates
    template: require('./cmp1.html'),
    controller: 'Cmp1Ctrl',
    controllerAs: 'cmp1'
  })

  .controller('Cmp1Ctrl', [function() {
    var vm = this;
    vm.email = 'mikeb@test.com';
  }]);
