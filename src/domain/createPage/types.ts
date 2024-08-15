import {PLACE_TYPE_HOTEL, PLACE_TYPE_PARK, PLACE_TYPE_RESTAURANT} from "./constants";

export type createPlaceRequestFormType = {
    name: string;
    type: typeof PLACE_TYPE_HOTEL | typeof PLACE_TYPE_RESTAURANT | typeof PLACE_TYPE_PARK,
    address: string
}