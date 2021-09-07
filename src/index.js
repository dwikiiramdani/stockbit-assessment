import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import Home from './lib/Home/Home';
import rootReducer from './reducer/rootReducer';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const middleware = [thunk]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
