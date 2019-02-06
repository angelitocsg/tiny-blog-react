import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './main/App'

import multi from 'redux-multi'

import './assets/css/bootstrap.scss'
import './assets/js/bootstrap'
import { blogReducer } from './blog/reducers/blogReducer';

const reducers = combineReducers({
    blog: blogReducer
})

const store = applyMiddleware(multi)(createStore)(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App title="Tiny Blog" subtitle="My Personal Blog" />
    </Provider>,
    document.getElementById('root')
)