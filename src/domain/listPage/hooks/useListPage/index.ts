import {useEffect, useState} from "react";
import {placesListResponseType, placeType} from "../../types";
import {DEFAULT_PAGINATION_COUNT, MODULE_API_PREFIX} from "../../constants";
import axios from "axios";
import {API_BASE_URL} from "../../../../shared/constants";
import {useNavigate} from "react-router";

export const useListPage = () => {
    let navigate = useNavigate();
    const [paginationData, setPaginationData] = useState<placesListResponseType>({
        page: 0,
        count: DEFAULT_PAGINATION_COUNT,
        total: 0,
        result: [],
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [weatherDialog, setWeatherDialog] = useState<placeType | null>(null);


    const loadPlaces = (page: number, type?: string) => {
        setLoading(true);
        try {
            axios.post(API_BASE_URL + MODULE_API_PREFIX, {
                page,
                count: DEFAULT_PAGINATION_COUNT,
                type
            }).then((res) => {
                setPaginationData(res.data);
            }).catch((err) => {
                console.log('loadPlaces err: ', err);
            })
        }catch (err){
            console.log('loadPlaces err: ', err);
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        !loading && loadPlaces(0);
    }, []);

    const loadNextPage = () => {
        !loading && loadPlaces(paginationData.page + 1);
    }

    const loadPrevPage = () => {
        !loading && loadPlaces(paginationData.page - 1);
    }

    const goToCreate = () => {
        navigate('/create');
    }

    const onPlaceClick = (e: placeType) => {
        setWeatherDialog(e);
    }

    const closeWeatherDialog = () => {
        setWeatherDialog(null);
    }

    return{
        places: paginationData.result,
        isAnyAfter: paginationData.total > (paginationData.page + 1) * paginationData.count,
        isAnyBefore: paginationData.page !== 0,
        loading,
        loadNextPage,
        loadPrevPage,
        goToCreate,
        onPlaceClick,
        weatherDialog: {
            isOpen: weatherDialog !== null,
            place: weatherDialog,
            handleClose: closeWeatherDialog,
        }
    }
}