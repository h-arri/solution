import {
    FETCH_HISTORIC_EVENT, FETCH_HISTORIC_EVENT_FAILURE,
    FETCH_HISTORIC_EVENT_SUCCESS,
    FETCH_HISTORY,
    FETCH_HISTORY_FAILURE,
    FETCH_HISTORY_SUCCESS
} from "../types";

export interface Links {
    reddit: string;
    article: string;
    wikipedia: string;
    video_link: string;
}

export interface HistoricEvent {
    id: number;
    title: string;
    event_date_utc: string;
    event_date_unix: number;
    flight_number: number;
    details: string;
    links: Links;
}

export interface HistoricEventState {
    historicEvent: HistoricEvent | null;
    loading: boolean;
    error: Error | null;
}

interface FetchHistoricEventAction {
    type: typeof FETCH_HISTORIC_EVENT
}

interface FetchHistoricEventSuccessAction {
    type: typeof FETCH_HISTORIC_EVENT_SUCCESS,
    payload: HistoricEvent
}

interface FetchHistoricEventFailureAction {
    type: typeof FETCH_HISTORIC_EVENT_FAILURE,
    error: Error
}

export type HistoricEventActions =
    FetchHistoricEventAction
    | FetchHistoricEventSuccessAction
    | FetchHistoricEventFailureAction;
