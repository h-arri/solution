import {combineReducers} from "redux";
import {HistoryReducer} from "./history/reducers";
import {HistoricEventReducer} from "./historic-event/reducer";

export const rootReducer = combineReducers({
    history: HistoryReducer,
    historicEvent: HistoricEventReducer
});

export type RootState = ReturnType<typeof rootReducer>;
