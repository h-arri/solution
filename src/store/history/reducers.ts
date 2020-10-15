import {HistoryActions, HistoryState} from "./types";
import {FETCH_HISTORY, FETCH_HISTORY_FAILURE, FETCH_HISTORY_SUCCESS} from "../types";

const initialState: HistoryState = {
    historicEvents: [],
    loading: false,
    error: null
};

export const HistoryReducer = (state = initialState, action: HistoryActions): HistoryState => {
    switch (action.type) {
        case FETCH_HISTORY:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_HISTORY_SUCCESS:
            return {
                ...state,
                historicEvents: action.payload,
                loading: false
            };
        case FETCH_HISTORY_FAILURE:
            return {
                ...state,
                historicEvents: [],
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
};
