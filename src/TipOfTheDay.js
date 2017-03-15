'use strict';

const Review = require('./Review');

class TipOfTheDay {
  constructor(data) {
    this.review = new Review(data.review[0]);
    this.published = new Date(data.published);
  }
}

module.exports = TipOfTheDay;
