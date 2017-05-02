'use strict';

const Asset = require('./Asset');
const Maxpert = require('./Maxpert');

class Review {
  constructor(data) {
    const asset = data.mam_asset_id[0];
    if (!asset) {
      throw new Error('missing linked asset in the review');
    }
    this.asset = new Asset(asset);
    this.headline = data.headline;
    const maxpert = data.maxpert[0];
    if (!maxpert) {
      throw new Error('missing linked maxpert in the review');
    }
    this.maxpert = new Maxpert(maxpert);
  }
}

module.exports = Review;
