import {Header} from "../../shared/components/header";
import {Autocomplete, Button, TextField} from "@mui/material";
import {FormWrapper} from "./styled";
import {PLACE_TYPE_RESTAURANT, PLACE_TYPE_SELECT} from "./constants";
import {useCreatePage} from "./hooks/useCreatePage";
import { LoadingButton } from '@mui/lab';

export const CreatePage = () => {
    const {formik, loading, goToList} = useCreatePage();

    return (
        <div style={{display: 'flex', gap: '10px', flexDirection: 'column'}}>
            <Header pageName={'Create'}>
                <Button variant={'contained'} onClick={goToList}>Show all</Button>
            </Header>
            <FormWrapper>
                <TextField
                    required
                    name={'name'}
                    label={('Name')}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={Boolean(formik.touched.name)}
                    helperText={formik.errors.name ?? ''}

                />

                <Autocomplete
                    renderInput={(props) => <TextField
                        {...props}
                        required
                        name={'type'}
                        error={Boolean(formik.errors.type)}
                        helperText={formik.errors.type ?? ''}
                    />}
                    defaultValue={PLACE_TYPE_RESTAURANT}
                    options={PLACE_TYPE_SELECT}
                />

                <TextField
                    required
                    name={'address'}
                    label={('Address')}
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={Boolean(formik.errors.address)}
                    helperText={formik.errors.address ?? ''}
                />


                <LoadingButton
                    loading={loading}
                    variant={'contained'}
                    onClick={formik.submitForm}
                    disabled={!formik.dirty || !formik.isValid}
                >
                    Submit
                </LoadingButton>
            </FormWrapper>
        </div>
    )
}