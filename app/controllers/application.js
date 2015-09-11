import Ember from 'ember';
import BeerDefinition from '../components/beer-definition';

export default Ember.Controller.extend({
  init: function() {
    this._super();
    let beers = Ember.A();
    let beer = BeerDefinition.create({name: "Cismontane Single Malt", price: 4.26, image: "images/crismontane.png", reviews: ["good", "bad"]});
    beers.pushObject(beer);
    beer = BeerDefinition.create({name: "Pumpkin Spice", price: 3.07, image: "images/pumpkin.png", reviews: []});
    beers.pushObject(beer);
    this.set("beers", beers);
  },
  beers: null,
  shoppingCart: Ember.A(),

  actions: {
    addToCart: function(beerName) {
      this.get("shoppingCart").pushObject(beerName);
    }
  }
});
