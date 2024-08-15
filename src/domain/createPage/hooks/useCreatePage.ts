import {useNavigate} from "react-router";
import * as yup from "yup";
import {MODULE_API_PREFIX, PLACE_TYPE_RESTAURANT, PLACE_TYPE_SELECT} from "../constants";
import {useFormik} from "formik";
import axios from "axios";
import {API_BASE_URL} from "../../../shared/constants";
import {createPlaceRequestFormType} from "../types";
import {useState} from "react";
import {LIST_PAGE_PATH} from "../../../shared/shell/constant";

export const useCreatePage = () => {
    const [loading, setLoading] = useState<boolean>(false);
    let navigate = useNavigate();

    const goToList = () => {
        navigate(LIST_PAGE_PATH);
    }

    const createPlace = async (place: createPlaceRequestFormType) => {
        setLoading(true);
        try{
            await axios.post(API_BASE_URL + MODULE_API_PREFIX, place)
                .then((res) => {
                    console.log(`res: `, res);
                    navigate(LIST_PAGE_PATH);
                }).catch((err) => {console.log(`err; `, err)})
        }catch(err){
            alert(err);
        }finally {
            setLoading(false);
        }
    }

    const validationSchema = yup.object({
        name: yup.string().required().max(25, 'Name should not be more than 25 characters'),
        type: yup.mixed().oneOf(PLACE_TYPE_SELECT),
        address: yup.string().required()
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            type: PLACE_TYPE_RESTAURANT,
            address: ''
        },
        validationSchema: validationSchema,
        onSubmit: createPlace,
    });

    return {
        formik,
        loading,
        goToList
    };
}