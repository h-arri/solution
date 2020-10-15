import {HistoricEvent, HistoricEventActions} from "./types";
import {FETCH_HISTORIC_EVENT, FETCH_HISTORIC_EVENT_FAILURE, FETCH_HISTORIC_EVENT_SUCCESS} from "../types";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../index";
import axios from "axios";
import {API_BASE_URL} from "../../constants";
import {ActionCreator} from "redux";

const fetchHistoricEvent: ActionCreator<HistoricEventActions> = () => ({
    type: FETCH_HISTORIC_EVENT
});

const fetchHistoricEventSuccess: ActionCreator<HistoricEventActions> = (historicEvent: HistoricEvent): HistoricEventActions => ({
    type: FETCH_HISTORIC_EVENT_SUCCESS,
    payload: historicEvent
});

const fetchHistoricEventFailure: ActionCreator<HistoricEventActions> = (error: Error): HistoricEventActions => ({
    type: FETCH_HISTORIC_EVENT_FAILURE,
    error
});

const fetchHistoricEventApi: ActionCreator<ThunkAction<void, RootState, unknown, HistoricEventActions>> = (id: number) => {
    return dispatch => {
        dispatch(fetchHistoricEvent());
        return axios.get(`${API_BASE_URL}/history/${id}`)
            .then(({data}) => {
                dispatch(fetchHistoricEventSuccess(data));
            })
            .catch(({error}) => {
                dispatch(fetchHistoricEventFailure(error))
            });
    };
};

export {fetchHistoricEvent, fetchHistoricEventSuccess, fetchHistoricEventFailure, fetchHistoricEventApi};
