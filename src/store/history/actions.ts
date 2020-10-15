import {HistoryActions} from "./types";
import {FETCH_HISTORY, FETCH_HISTORY_FAILURE, FETCH_HISTORY_SUCCESS} from "../types";
import {RootState} from "../index";
import {ThunkAction} from "redux-thunk";
import axios from 'axios';
import {API_BASE_URL} from "../../constants";
import {HistoricEvent} from "../historic-event/types";
import {ActionCreator} from "redux";

const fetchHistory: ActionCreator<HistoryActions> = () => ({
    type: FETCH_HISTORY
});

const fetchHistorySuccess: ActionCreator<HistoryActions> = (history: HistoricEvent[]) => ({
    type: FETCH_HISTORY_SUCCESS,
    payload: history
});

const fetchHistoryFailure: ActionCreator<HistoryActions> = (error: Error) => ({
    type: FETCH_HISTORY_FAILURE,
    error
});

const fetchHistoryApi: ActionCreator<ThunkAction<void, RootState, unknown, HistoryActions>> = () => {
    return dispatch => {
        dispatch(fetchHistory());
        return axios.get(`${API_BASE_URL}/history`)
            .then(({data}) => {
                dispatch(fetchHistorySuccess(data));
            })
            .catch(({error}) => {
                dispatch(fetchHistoryFailure(error))
            });
    };
};

export {fetchHistory, fetchHistorySuccess, fetchHistoryFailure, fetchHistoryApi};
