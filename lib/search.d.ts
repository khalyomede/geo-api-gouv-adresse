import ISearchOptions from "./ISearchOptions";
import ISearchResults from "./ISearchResults";
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
declare const search: (searchTerm: string, options?: ISearchOptions | undefined) => Promise<ISearchResults>;
export default search;
