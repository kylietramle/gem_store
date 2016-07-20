(function (){
  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.product = gem; // property of the controller
  });

  var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description: '...',
  }

})();