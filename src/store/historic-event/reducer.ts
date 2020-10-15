import {HistoricEventActions, HistoricEventState} from "./types";
import {FETCH_HISTORIC_EVENT, FETCH_HISTORIC_EVENT_FAILURE, FETCH_HISTORIC_EVENT_SUCCESS} from "../types";

const initialState: HistoricEventState = {
    historicEvent: null,
    loading: false,
    error: null
};

export const HistoricEventReducer = (state = initialState, action: HistoricEventActions): HistoricEventState => {
    switch (action.type) {
        case FETCH_HISTORIC_EVENT:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_HISTORIC_EVENT_SUCCESS:
            return {
                ...state,
                historicEvent: action.payload,
                loading: false
            };
        case FETCH_HISTORIC_EVENT_FAILURE:
            return {
                ...state,
                historicEvent: null,
                error: action.error
            };
        default:
            return state;
    }
};
