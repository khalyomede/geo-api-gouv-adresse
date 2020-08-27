import SearchType from "./SearchType";
import ISearchResultProperty from "./ISearchResultProperty";
import ISearchGeometry from "./ISearchGeometry";

interface ISearchResult {
    /**
     * As per GeoJSON spec.
     */
    type: "Feature";

    /**
     * As per GeoJSON spec.
     */
    properties: ISearchResultProperty;

    /**
     * As per GeoJSON spec.
     */
    geometry: ISearchGeometry;
}

export default ISearchResult;
