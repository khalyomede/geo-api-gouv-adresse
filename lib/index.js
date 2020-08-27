'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var axios = require('axios');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

/**
 * Execute a search on the French address database and get a list of results.
 *
 * @param {String} searchTerm The search to perform.
 * @param {Object} options The options to customize the result.
 * @return {Promise} A promise with an object containing the search results (see the documentation for more details).
 * @throws {TypeError} If the first argument is not an Object.
 * @throws {TypeError} If the options contains unknown parameters.
 * @throws {TypeError} If the autocomplete key of the option is not a Boolean.
 * @throws {TypeError} If the longitude key of the option is not a Number.
 * @throws {RangeError} If the longitude key of the options is not between -180 and 180.
 * @throws {TypeError} If the latitude key of the options is not a Number.
 * @throws {RangeError} If the latitude key of the options is not between 0 and 90.
 * @throws {TypeError} If the type key of the options is not a String.
 * @throws {Error} If the type key is not one of the allowed options (see the documentation for more details).
 * @throws {TypeError} If the postcode key of the options is not a String.
 * @throws {TypeError} If the citycode key of the options is not a String.
 * @throws {Error} If no response could be fetched from the server.
 */
var search = function (searchTerm, options) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (typeof searchTerm !== "string") {
                    throw new TypeError("expected argument 1 to be a string");
                }
                checkSearchOptions(options);
                url = getSearchUrl(searchTerm, options);
                return [4 /*yield*/, axios__default['default'].get(url)];
            case 1:
                response = _a.sent();
                if (response.status !== 200) {
                    throw new Error("failed to get the results with message " + response.statusText + " (code: " + response.status + ")");
                }
                return [2 /*return*/, response.data];
        }
    });
}); };
/**
 * May throw exceptions if the options are malformed.
 *
 * @param {Object} options The search options.
 * @throws {TypeError} If the first argument is not an Object.
 * @throws {TypeError} If the options contains unknown parameters.
 * @throws {TypeError} If the autocomplete key of the option is not a Boolean.
 * @throws {TypeError} If the longitude key of the option is not a Number.
 * @throws {RangeError} If the longitude key of the options is not between -180 and 180.
 * @throws {TypeError} If the latitude key of the options is not a Number.
 * @throws {RangeError} If the latitude key of the options is not between 0 and 90.
 * @throws {TypeError} If the type key of the options is not a String.
 * @throws {Error} If the type key is not one of the allowed options (see the documentation).
 * @throws {TypeError} If the postcode key of the options is not a String.
 * @throws {TypeError} If the citycode key of the options is not a String.
 */
var checkSearchOptions = function (options) {
    var allowedKeys = [
        "limit",
        "autocomplete",
        "longitude",
        "latitude",
        "type",
        "postcode",
        "citycode",
    ];
    var allowedTypes = [
        "street",
        "house",
        "locality",
        "city",
        "region",
        "country",
    ];
    if (options === undefined) {
        return;
    }
    if (!(options instanceof Object)) {
        throw new TypeError("expected argument 2 to be an Object");
    }
    var unknownKeys = Object.keys(options).filter(function (key) { return !allowedKeys.includes(key); });
    if (unknownKeys.length > 0) {
        var unknownKeyNames = unknownKeys.join(", ");
        var allowedKeyNames = allowedKeys.join(", ");
        throw new TypeError("unknown option " + unknownKeyNames + " (allowed: " + allowedKeyNames + ")");
    }
    if ("limit" in options) {
        if (typeof options.limit !== "number") {
            throw new TypeError("expected key options.limit to be a Number");
        }
        if (options.limit < 1) {
            throw new RangeError("expected key options.limit to be greater or equal to 1");
        }
    }
    if ("autocomplete" in options &&
        typeof options.autocomplete !== "boolean") {
        throw new TypeError("expected key options.autocomplete to be a Boolean");
    }
    if ("longitude" in options) {
        if (typeof options.longitude !== "number") {
            throw new TypeError("expected key options.longitude to be a Number");
        }
        if (options.longitude < -180 || options.longitude > 180) {
            throw new RangeError("expected key options.longitude to be between -180 and 180");
        }
    }
    if ("latitude" in options) {
        if (typeof options.latitude !== "number") {
            throw new TypeError("expected key options.latitude to be a Number");
        }
        if (options.latitude < 0 || options.latitude > 90) {
            throw new RangeError("expected key options.latitude to be between 0 and 90");
        }
    }
    if ("type" in options) {
        if (typeof options.type !== "string") {
            throw new TypeError("expected key options.type to be a String");
        }
        if (!allowedTypes.includes(options.type)) {
            var allowedTypeNames = allowedTypes.join(", ");
            throw new Error("unknown value " + options.type + " for key options.type (allowed: " + allowedTypeNames + ")");
        }
    }
    if ("postcode" in options && typeof options.postcode !== "string") {
        throw new TypeError("expected key options.postcode to be a String");
    }
    if ("citycode" in options && typeof options.citycode !== "string") {
        throw new TypeError("expected key options.citycode to be a String");
    }
};
/**
 * Constructs the URL from the search term and the options.
 *
 * @param {String} searchTerm The search query as text.
 * @param {Object} options The options to customize the search results.
 * @return {String} The constructed URL;
 */
var getSearchUrl = function (searchTerm, options) {
    var url = new URL("https://api-adresse.data.gouv.fr/search/");
    url.searchParams.append("q", searchTerm);
    if (options instanceof Object) {
        if ("autocomplete" in options &&
            typeof options.autocomplete === "boolean") {
            url.searchParams.append("autocomplete", options.autocomplete.toString());
        }
        if ("longitude" in options && typeof options.longitude === "number") {
            url.searchParams.append("longitude", options.longitude.toString());
        }
        if ("latitude" in options && typeof options.latitude === "number") {
            url.searchParams.append("latitude", options.latitude.toString());
        }
        if ("type" in options && typeof options.type === "string") {
            url.searchParams.append("type", options.type);
        }
        if ("postcode" in options && typeof options.postcode === "string") {
            url.searchParams.append("postcode", options.postcode);
        }
        if ("citycode" in options && typeof options.citycode === "string") {
            url.searchParams.append("citycode", options.citycode);
        }
        if ("limit" in options && typeof options.limit === "number") {
            url.searchParams.append("limit", options.limit.toString());
        }
    }
    return url.href;
};

exports.search = search;
