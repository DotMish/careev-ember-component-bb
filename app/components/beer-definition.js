import Ember from 'ember';

export default Ember.Object.extend({
  name: "",
  price: 0.0,
  image: null,
  reviews: [],
  hasReviews: function() {
    return this.get("reviews").length > 0;
  }.property(),
  reviewCount: function() {
    return this.get("reviews").length;
  }.property()

});
