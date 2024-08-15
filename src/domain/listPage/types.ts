import {createPlaceRequestFormType} from "../createPage/types";
import {paginationResult} from "../../shared/types";

export interface placeType extends createPlaceRequestFormType{
    id: string;
    createdAt: string;
    longitude: number;
    latitude: number;
}

export type placesListResponseType = paginationResult<placeType>;

export type mapPositionType = {latitude: number, longitude: number, zoom: number};