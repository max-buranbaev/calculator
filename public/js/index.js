import React from 'react'
import ReactDOM from 'react-dom'
import store from './store.js'
import Layout from './components/Layout.jsx'

import { Provider } from 'react-redux'

const app = (
    <Provider store={ store }>
        <Layout />
    </Provider>
);

var render = () => { ReactDOM.render(app, document.getElementById("content")); }

render();

store.subscribe(render);