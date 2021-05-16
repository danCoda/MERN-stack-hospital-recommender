import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={ store }>
        <h1>Hospital Finder</h1>
        <h3>...For the lowest waiting time!</h3>
        <App />
    </Provider>,
    document.querySelector('#root')
);