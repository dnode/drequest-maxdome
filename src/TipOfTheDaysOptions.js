'use strict';

const TipOfTheDay = require('./TipOfTheDay');

class TipOfTheDaysOptions {
  toRequestOptions() {
    return {
      headers: {
        client: 'mxd_package',
      },
      method: 'get',
      transform: data => data.map(tipoftheday => new TipOfTheDay(tipoftheday)),
      url: {
        path: 'v1/components/tipoftheday',
      },
    };
  }
}

module.exports = TipOfTheDaysOptions;
