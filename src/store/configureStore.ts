import {createStore, applyMiddleware, Store} from "redux";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import {rootReducer, RootState} from "./index";

const configureStore: Store<RootState> = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(reduxThunk))
);

export default configureStore;