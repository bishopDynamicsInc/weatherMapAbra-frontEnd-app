import {useNavigate} from "react-router";
import {ListComponent, ListPageWrapper, ListWrapper, MainPageWrapper, MapWrapper} from "./styled";
import {useListPage} from "./hooks/useListPage";
import {Button} from "@mui/material";
import moment from 'moment';
import {Header} from "../../shared/components/header";

//map
import {Map} from "./components/map";
import {MapContainer} from "react-leaflet";
import {WeatherDialog} from "./components/weatherDialog";

export const ListPage = () => {
    const {
        places,
        isAnyAfter,
        isAnyBefore,
        loading,
        loadNextPage,
        goToCreate,
        loadPrevPage,
        weatherDialog,
        onPlaceClick
    } = useListPage();

    return (
        <MainPageWrapper>
            <Header pageName={'Places list'}>
                <Button variant={'contained'} onClick={goToCreate}>Create</Button>
            </Header>

            <ListPageWrapper>
                <ListWrapper>
                    {places.length === 0 && !loading && <p>No places added yet!</p>}
                    {isAnyBefore && !loading && <Button variant={'contained'} onClick={loadPrevPage}>Prev page</Button>}

                    {places.length > 0 && !loading && places.map(e => <ListComponent key={e.id}>
                        <p>{e.name}</p>
                        <p>{e.type}</p>
                        <p>{e.address}</p>
                        <>{moment(e.createdAt).startOf('hour').fromNow()}</>
                    </ListComponent>)}
                    {loading && <p>LOADING...</p>}
                    {isAnyAfter && !loading && <Button variant={'contained'} onClick={loadNextPage}>Next page</Button>}
                </ListWrapper>

                <MapWrapper>
                    <MapContainer center={[0, 0]} zoom={1} style={{ height: "100%", width: "100%" }}>
                        {!loading && <Map places={places} onPlaceClick={onPlaceClick}/>}
                    </MapContainer>
                </MapWrapper>
            </ListPageWrapper>

            <WeatherDialog {...weatherDialog} />
        </MainPageWrapper>
    )
}