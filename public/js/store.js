import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import reducer from './reducer.js'
import promise from 'redux-promise-middleware'
import sendRequest  from './middlewars/sendRequest'


const middleware = applyMiddleware(promise(), sendRequest, logger());
const store = createStore(reducer, middleware);

export default store;