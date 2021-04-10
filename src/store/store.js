import { applyMiddleware, createStore, compose } from 'redux'
import rootReducer from './reducers/rootReducer'
import loggerMiddleware from '../middleware/logger'

const middlewareEnhancer = applyMiddleware(loggerMiddleware)
const composedEnhancers = compose(middlewareEnhancer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default createStore(rootReducer, undefined, composedEnhancers);