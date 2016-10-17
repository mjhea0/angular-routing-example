(function() {

  'use strict';

  angular
    .module('myApp.components.posts', [])
    .controller('postsController', postsController);

  postsController.$inject = ['$scope'];

  function postsController($scope) {
    /*jshint validthis: true */
    console.log('sanity check!');
  }

})();
