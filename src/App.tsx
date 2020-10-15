import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import History from "./components/history/History";
import store from './store/configureStore';

const App: React.FC = () => {

  return (
      <Provider store={store}>
        <div className="app">
          <header className="app-header">
            SpaceX History
          </header>
          <History />
        </div>
      </Provider>
  );
}

export default App;
