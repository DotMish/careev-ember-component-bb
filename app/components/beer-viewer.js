import Ember from 'ember';
import layout from '../templates/components/beer-viewer';


export default Ember.Component.extend({
  layout: layout,
  beers: null,
  actions: {
    addToCart: function(beer) {
      let beerName = beer.get("name");
      this.sendAction("actionAddToCart", beerName);
    },
    readReviews: function() {

    }
  }
});
