import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {placeType} from "../../types";

export const WeatherDialog = ({isOpen, handleClose, place}: {isOpen: boolean, handleClose: () => void, place: placeType | null}) => {
    if(!place) return <></>;
    return(
        <Dialog open={isOpen} onClose={handleClose} maxWidth={'sm'} fullWidth>
            <DialogTitle>{place.name} weather</DialogTitle>

            <DialogContent>
                WEATHER
            </DialogContent>

            <DialogActions>
                <Button variant={'contained'} onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}