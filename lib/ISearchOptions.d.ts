import SearchType from "./SearchType";
interface ISearchOptions {
    /**
     * Limits the number of results returned by the server.
     */
    limit?: number;
    /**
     * Activates auto completion processes (default: false).
     */
    autocomplete?: boolean;
    /**
     * Gives a geographic priority to the address by matching the closest longitude (default: null).
     */
    longitude?: number;
    /**
     * Gives a geographic priority to the address by matching the closest latitude (default: null).
     */
    latitude?: number;
    /**
     * Restrict the search to the type of search you are requesting (default: "street").
     */
    type?: SearchType;
    /**
     * Restrict the search to a certain postal code (default: null).
     */
    postcode?: string;
    /**
     * The INSEE code of the city you want the search results to be restricted on (default: null)
     */
    citycode?: string;
}
export default ISearchOptions;
