import {placeType} from "../../types";
import axios from "axios";

export const useWeatherDialog = (place: placeType | null) => {


}

const getWeatherData = async(place: placeType | null) => {
    // axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${place?.latitude}&lon=${place?.longitude}&appid=${OPEN_WEATHER_API_URL}`)
}