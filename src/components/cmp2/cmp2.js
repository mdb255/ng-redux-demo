// Angular 1.5 Component style syntax

angular.module("mdb255.mainApp")
  .component('cmp2', {
    // Use a template inline from webpack using the html-loader
    // Allows for page auto-refresh when editing templates
    template: require('./cmp2.html'),
  });
