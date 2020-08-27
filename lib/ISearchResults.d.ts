import ISearchResult from "./ISearchResult";
interface ISearchResults {
    type: "FeatureCollection";
    /**
     *  A semver.org compliant version number. Describes the version of the GeocodeJSON spec that is implemented by this instance.
     */
    version: string;
    /**
     * The licence of the data. In case of multiple sources, and then multiple licences, can be an object with one key by source.
     */
    licence?: string | object;
    /**
     * The attribution of the data. In case of multiple sources, and then multiple attributions, can be an object with one key by source.
     */
    attribution?: string | object;
    /**
     * The query that has been issued to trigger the search.
     */
    query: string;
    features: Array<ISearchResult>;
}
export default ISearchResults;
