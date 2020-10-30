import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import list, { fetchListWatcher } from './list'

const rootReducer = combineReducers({ list })

export function* rootSaga() {
  yield all([fetchListWatcher()])
}

export default rootReducer
