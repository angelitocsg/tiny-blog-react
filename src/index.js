import React from 'react'
import ReactDOM from 'react-dom'

import App from './main/App'

import './assets/css/bootstrap.scss'
import './assets/js/bootstrap'

ReactDOM.render(
    <App title="Tiny Blog" subtitle="My Personal Blog" />, 
    document.getElementById('root')
)