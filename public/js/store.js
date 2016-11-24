import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import reducer from './reducer.js'
import promise from 'redux-promise-middleware'


const middleware = applyMiddleware(promise(), logger());
const store = createStore(reducer, middleware);

export default store;