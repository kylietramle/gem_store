(function (){
  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.products = gems; // property of the controller
  });

  var gems = [

  {
    name: 'Dodecahedron',
    price: 2,
    description: '...',
    canPurchase: true,
    soldOut: true,
    image:
      {
        full: '<%= asset_path("dodecahedron.jpg") %>',
        thumb: ''
      }
  },

  {
    name: 'Pentagonal Gem',
    price: 5.95,
    description: '...',
    canPurchase: false,
  }

];
})();