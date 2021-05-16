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
        <div className="container" id="company-name">
            <h1 
                class="display-3 text-center"
                onClick={() => window.location.reload()}
            >
                Hospital Finder
            </h1>
            <h3 class="lead text-center bg-light sub-header">...to get treated, <em>faster!</em></h3>
            <App />
        </div>
    </Provider>,
    document.querySelector('#root')
);