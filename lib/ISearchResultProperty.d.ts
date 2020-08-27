import SearchType from "./SearchType";
interface ISearchResultProperty {
    /**
     * Result accuracy, in meters.
     */
    accuracy?: number;
    /**
     * Suggested label for the result.
     */
    label: string;
    /**
     * Name of the place.
     */
    name?: string;
    /**
     * Housenumber of the place.
     */
    housenumber?: number;
    /**
     * Street of the place.
     */
    street?: string;
    /**
     * Locality of the place.
     */
    locality?: string;
    /**
     * Postcode of the place.
     */
    postcode?: string;
    /**
     * City of the place.
     */
    city?: string;
    /**
     * District of the place.
     */
    district?: string;
    /**
     * County of the place.
     */
    county?: string;
    /**
     * State of the place.
     */
    state?: string;
    /**
     * Country of the place.
     */
    country?: string;
    /**
     * As per GeoJSON spec.
     */
    type: SearchType;
}
export default ISearchResultProperty;
