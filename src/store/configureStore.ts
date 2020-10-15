import {applyMiddleware, createStore, Store} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import {rootReducer, RootState} from "./index";

const configureStore: Store<RootState> = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(reduxThunk))
);

export default configureStore;