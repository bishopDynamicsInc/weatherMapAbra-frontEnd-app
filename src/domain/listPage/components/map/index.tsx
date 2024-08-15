import {Marker, TileLayer, useMap} from "react-leaflet";
import {placeType} from "../../types";

export const Map = ({places, onPlaceClick}: {places: placeType[], onPlaceClick: (e: placeType) => void}) => {
    const map = useMap();

    const recenter = (lat: number, lon: number) => {
        map.flyTo([lat, lon], 8);
        return null;
    }

    return(
        <>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {places.map(e => <Marker
                key={e.id}
                position={[e.latitude, e.longitude]}
                eventHandlers={{
                    click: () => {
                        recenter(e.latitude, e.longitude);
                        onPlaceClick(e);
                    }
                }}
            />)}
        </>
    )
}