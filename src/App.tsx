import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import History from "./components/history/History";
import store from './store/configureStore';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HistoryDetails from "./components/history-details/HistoryDetails";

const App: React.FC = () => {

    return (
        <Router>
            <Provider store={store}>
                <div className="app">
                    <header className="app-header">
                        SpaceX History
                    </header>
                    <Switch>
                        <Route exact path='/' component={History}/>
                        <Route exact path='/history/:id' component={HistoryDetails}/>
                    </Switch>
                </div>
            </Provider>
        </Router>
    );
}

export default App;
