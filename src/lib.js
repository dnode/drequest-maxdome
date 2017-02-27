'use strict';

const AssetsOptions = require('./AssetsOptions');
const MaxdomeOptions = require('./MaxdomeOptions');
const RequestBuilder = require('drequest').RequestBuilder;

module.exports = {
  Asset: require('./Asset'),
  AssetsOptions,
  AssetsQueryOptions: require('./AssetsQueryOptions'),
  MaxdomeOptions,
  SessionOptions: require('./SessionOptions'),
  getRequestBuilder: ({
    maxdomeOptions: maxdomeOptions = {},
    assetOptions: assetOptions = {},
  } = {}) => new RequestBuilder()
    .setOptions('maxdome', new MaxdomeOptions(maxdomeOptions))
    .addNames('maxdome')
    .setOptions('assets', new AssetsOptions(assetOptions)),
};
