import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer, { rootSaga } from './reducers'

const logger = createLogger()
const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store
