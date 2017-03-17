'use strict';

const AssetsOptions = require('./AssetsOptions');
const MaxdomeOptions = require('./MaxdomeOptions');
const RequestBuilder = require('drequest').RequestBuilder;
const TipOfTheDaysOptions = require('./TipOfTheDaysOptions');

module.exports = {
  Asset: require('./Asset'),
  AssetsOptions,
  AssetsQueryOptions: require('./AssetsQueryOptions'),
  MaxdomeOptions,
  Maxpert: require('./Maxpert'),
  Review: require('./Review'),
  SessionOptions: require('./SessionOptions'),
  TipOfTheDay: require('./TipOfTheDay'),
  TipOfTheDaysOptions,
  getRequestBuilder: ({
    maxdomeOptions: maxdomeOptions = {},
    assetOptions: assetOptions = {},
  } = {}) => new RequestBuilder(new MaxdomeOptions(maxdomeOptions))
    .setOptions('assets', new AssetsOptions(assetOptions))
    .setOptions('tipOfTheDays', new TipOfTheDaysOptions()),
};
