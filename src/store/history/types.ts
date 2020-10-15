import {FETCH_HISTORY, FETCH_HISTORY_FAILURE, FETCH_HISTORY_SUCCESS} from "../types";
import {HistoricEvent} from "../historic-event/types";

export interface HistoryState {
    historicEvents: Array<HistoricEvent>;
    loading: boolean;
    error: Error | null;
}

interface FetchHistoryAction {
    type: typeof FETCH_HISTORY
}

interface FetchHistorySuccessAction {
    type: typeof FETCH_HISTORY_SUCCESS,
    payload: HistoricEvent[]
}

interface FetchHistoryFailureAction {
    type: typeof FETCH_HISTORY_FAILURE,
    error: Error
}

export type HistoryActions = FetchHistoryAction | FetchHistorySuccessAction | FetchHistoryFailureAction;
