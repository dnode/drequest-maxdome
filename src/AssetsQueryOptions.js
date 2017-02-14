'use strict';

class AssetsQueryOptions {
  constructor(ids) {
    this._query = {};
    if (ids) {
      this.filter('assetId', ids);
    }
  }

  query(key, value) {
    if (this._query[key]) {
      if (!Array.isArray(this._query[key])) {
        this._query[key] = [this._query[key]];
      }
      this._query[key].push(value);
    } else {
      this._query[key] = value;
    }
    return this;
  }

  param(type, name, values) {
    if (values) {
      if (!Array.isArray(values)) {
        values = [values];
      }
      this.query(type, `${name}~${values.join('|')}`);
    } else {
      this.query(type, name);
    }
    return this;
  }

  filter(name, values) {
    const alternativeNames = {
      package: 'hasPackageContent',
      store: 'availableWithoutPackage',
    };
    if (alternativeNames[name]) {
      name = alternativeNames[name];
    }
    this.param('filter[]', name, values);
    return this;
  }

  sort(name, values) {
    this.param('sort[]', name, values);
    return this;
  }

  toRequestOptions() {
    return {
      url: {
        query: this._query,
      },
    };
  }
}

module.exports = AssetsQueryOptions;
