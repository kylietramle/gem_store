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
      return (this.tab === checkTab);
    };

  });

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);  // push controller's review onto reviews array
    this.review = {};     // clear out preview form
    };

  });

  var gems = [

  {
    name: 'Dodecahedron',
    price: 2,
    description: 'A very pretty gem',
    image: 'http://www.diamondcrystals.net/africa/gem1t.jpg',
    reviews: [
      {
        stars: 5,
        body: 'I love this gem!',
        author: 'willy@williors.com'
      },
      {
        stars: 1,
        body: 'Eh it is all right.',
        author: 'willy-kun@wlliors.com'
      }
    ]
  },

  {
    name: 'Pentagonal Gem',
    price: 5.95,
    description: '...',
    image: 'http://66.media.tumblr.com/9494ad459271fc0e547d021f2f467b47/tumblr_inline_nq0w7atP3K1qijduu_500.gif'
  }

];
})();