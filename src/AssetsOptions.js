'use strict';

const Asset = require('./Asset');

class AssetsOptions {
  constructor({
    hostname: hostname = 'maxdome.de',
    protocol: protocol = 'http',
  } = {}) {
    this.hostname = hostname;
    this.protocol = protocol;
  }

  toDRequestOptions() {
    return {
      method: 'get',
      transform: data => data.assetList.map(
        data => new Asset(data, { hostname, protocol })
      ),
      url: {
        path: 'v1/mxd/assets'
      },
    };
  }
}

module.exports = AssetsOptions;
