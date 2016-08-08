(function (){
  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.products = gems; // property of the controller
  });
  
  app.controller('PanelController', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };

    });

  var gems = [

  {
    name: 'Dodecahedron',
    price: 2,
    description: 'A very pretty gem',
    canPurchase: true,
    soldOut: true,
    image: 'http://www.diamondcrystals.net/africa/gem1t.jpg',
  },

  {
    name: 'Pentagonal Gem',
    price: 5.95,
    description: '...',
    canPurchase: false,
  }

];
})();