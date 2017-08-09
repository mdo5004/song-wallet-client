import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import {WrapperApp} from './App';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer'

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)


ReactDOM.render(
    <Provider store={store}>
        <WrapperApp />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();