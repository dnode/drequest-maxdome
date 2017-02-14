'use strict';

const fs = require('fs');

const app = JSON.parse(fs.readFileSync(`${process.cwd()}/package.json`));
const lib = JSON.parse(fs.readFileSync(`${__dirname}/../package.json`));

class MaxdomeOptions {
  constructor({
    apikey: apikey = process.env.MAXDOME_APIKEY,
    appid: appid = process.env.MAXDOME_APPID,
    hostname: hostname = 'heimdall.maxdome.de/api',
    protocol: protocol = 'https',
  } = {}) {
    this.apikey = apikey;
    this.appid = appid;
    this.hostname = hostname;
    this.protocol = protocol;
  }

  toDRequestOptions() {
    return {
      headers: {
        accept: 'application/json',
        client: 'mxd_store',
        clienttype: 'Webportal',
        'content-type': 'application/json',
        from: (() => {
          const author = app.author;
          if (typeof author === 'object') {
            return `${author.name} <${author.email}> (${author.url})`;
          }
          return author;
        })(),
        language: 'de_DE',
        'maxdome-origin': 'maxdome.de',
        platform: 'web',
        'user-agent': `${app.name} v${app.version} via ${lib.name} v${lib.version}`,
      },
      json: true,
      url: {
        hostname: this.hostname,
        protocol: this.protocol,
        queries: [
          `apikey=${this.apikey}`,
          `appid=${this.appid}`,
        ],
      },
    };
  }
}

module.exports = MaxdomeOptions;
