[![Dependency Status](https://david-dm.org/dnode/drequest-maxdome/status.svg)](https://david-dm.org/dnode/drequest-maxdome)
[![devDependency Status](https://david-dm.org/dnode/drequest-maxdome/dev-status.svg)](https://david-dm.org/dnode/drequest-maxdome?type=dev)


# Installation

`npm i --save drequest-maxdome`


# Initialisation

```javascript
const maxdome = require('drequest-maxdome').getRequestBuilder();
```

**Attention**: `drequest-maxdome` will use several information from the `package.json` and add them to the headers. This makes it easier to identify the source of the request in the logs of maxdome if there are issues.
The information which will be used:
* from: 
  * If the author is an object: `${author.name} <${author.email}> (${author.url})`
  * If not, the string will be used
* user-agent: `${app.name} v${app.version} via ${lib.name} v${lib.version}`


# Examples

## Get information for a specific asset by ID

```javascript
const AssetsQueryOptions = require('drequest-maxdome').AssetsQueryOptions;

const assetId = <assetId>;
const assetsQueryOptions = new AssetsQueryOptions(assetId);

const assets =
  await maxdome.request('assets')
    .addOptions(assetsQueryOptions)
    .send();
```

## Search assets by title and get the first 3 results

```javascript
const AssetsQueryOptions = require('drequest-maxdome').AssetsQueryOptions;

const title = '<title>';
const assetsQueryOptions = 
  new AssetsQueryOptions()
    .addFilter('contentTypeSeriesOrMovies')
    .addFilter('search', title)
    .addQuery('pageSize', 3);
    
const assets =
  await maxdome.request('assets')
    .addOptions(assetsQueryOptions)
    .send();
```

## Get the 50 newest store movies

```javascript
const AssetsQueryOptions = require('drequest-maxdome').AssetsQueryOptions;

const title = '<title>';
const assetsQueryOptions = 
  new AssetsQueryOptions()
    .addFilter('availableWithoutPackage')
    .addFilter('movies')
    .addFilter('new')
    .addFilter('notUnlisted')
    .addQuery('pageSize', 50)
    .addSort('activeLicenseStart', 'desc');
    
const assets =
  await maxdome.request('assets')
    .addOptions(assetsQueryOptions)
    .send();
```
