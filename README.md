# geo-api-gouv-adresse

Everything you can do from the Geo API Gouv adresse endpoint.

## Summary

-   [About](#about)
-   [Requirements](#requirements)
-   [Installation](#installation)
-   [Examples](#examples)
-   [API](https://khalyomede.github.io/geo-api-gouv-adresse/globals.html)

## About

This library is a wrapper for using the Data Gouv API Adresse endpoint.

It offers no more features than what is possible with the endpoint, and the options name are the exact same.

I created the library because I have only seen [one package](https://github.com/Raesta/gouv-geo-api), that was not tested, and not up to date.

## Requirements

If you use it via the CDN link, you need to use axios alongside the library (check the examples).

If you use it on Node.JS, you already have NPM and (Node or Yarn) installed in your machine, and axios will be pulled at the installation.

## Installation

### Browser

In the `<body>` of your HTML document, add these CDNs links (don't add axios if it is already present).

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Some website</title>
    </head>
    <body>
        <!-- ... -->
        <script
            type="text/javascript"
            src="https://unpkg.com/axios@0.20.0/dist/axios.min.js"
        ></script>
        <script
            type="text/javascript"
            src="https://unpkg.com/geo-api-gouv-adresse@0.1.0/dist/index.min.js"
        ></script>
        <script type="text/javascript">
            // Call the library here...
        </script>
    </body>
</html>
```

### Node.JS

In your root folder, open a terminal and install the library:

```bash
npm install --save-dev geo-api-gouv-adresse
```

## Examples

For a complete list of options, see the [online documentation](https://khalyomede.github.io/geo-api-gouv-adresse/interfaces/_isearchoptions_.isearchoptions.html).

-   [Search from an address](#search-from-an-address)
-   [Limiting search results](#limiting-search-results)

### Search from an address

In this example, we will use a partially complete address, and get the results for this address.

#### Browser

```javascript
geoApiGouvAdresse
    .search("8 bd du port")
    .then(function (response) {
        response.forEach(function (address) {
            console.log(
                "found a matching street name:",
                address.properties.name
            );
        });
    })
    .catch(function (error) {
        console.log("an error occured");
    });
```

#### Node.JS

```javascript
import { search } from "geo-api-gouv-adresse";
// or
// const { search } = require("geo-api-gouv-adresse");

const main = async () => {
    let results = {};

    try {
        results = await search("8 bd du");
    } catch (exception) {
        console.error("an error occured");
    }

    for (const address of results.features) {
        console.log(`found a matching street name: ${address.properties.name}`);
    }
};

main();
```

For a detail on how the response is composed, see the official [Geo API gouv adresse website](https://geo.api.gouv.fr/adresse), and the [Geocode JSON spec](https://github.com/geocoders/geocodejson-spec/tree/master/draft).

### Limiting search results

In this example, we will limit the number of results for the street we are searching for.

#### Browser

```javascript
geoApiGouvAdresse
    .search("8 bd du port", { limit: 10 })
    .then(function (response) {
        response.forEach(function (address) {
            console.log(
                "found a matching street name:",
                address.properties.name
            );
        });
    })
    .catch(function (error) {
        console.log("an error occured");
    });
```

#### Node.JS

```javascript
import { search } from "geo-api-gouv-adresse";
// or
// const { search } = require("geo-api-gouv-adresse");

const main = async () => {
    let response = {};

    try {
        response = await search("8 bd du", {
            limit: 10,
        });
    } catch (exception) {
        console.error("an error occured");

        return;
    }

    for (const address of response.features) {
        console.log(`found a matching street name: ${address.properties.name}`);
    }
};

main();
```
