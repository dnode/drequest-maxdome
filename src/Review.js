'use strict';

const Asset = require('./Asset');
const Maxpert = require('./Maxpert');

class Review {
  constructor(data) {
    this.asset = new Asset(data.mam_asset_id[0]);
    this.headline = data.headline;
    this.maxpert = new Maxpert(data.maxpert[0]);
  }
}

module.exports = Review;
