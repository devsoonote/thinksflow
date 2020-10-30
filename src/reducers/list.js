import axios from 'axios'
import product from 'immer'

import { put, takeLatest } from 'redux-saga/effects'
import { SERVER } from '../utils'

const LIST = 'LIST'
const LIST_SUCCESS = 'LIST_SUCCESS'
const LIST_ERROR = 'LIST_ERROR'

export const onGetList = () => ({ type: LIST })

function* getListSaga() {
  try {
    const { data } = yield axios.get(`${SERVER}`)
    yield put({ type: LIST_SUCCESS, payload: data })
  } catch (e) {
    yield put({ type: LIST_ERROR, payload: e })
  }
}

export function* fetchListWatcher() {
  yield takeLatest(LIST, getListSaga)
}

const initialState = {
  loading: false,
  error: null,
  data: []
}

export default function feed(state = initialState, action) {
  return product(state, (draft) => {
    switch (action.type) {
      case 'LIST':
        draft.loading = true
        break
      case 'LIST_SUCCESS':
        draft.loading = false
        draft.data = action.payload
        break
      case 'LIST_ERROR':
        draft.loading = false
        draft.error = action.payload
        break
      default:
        return state
    }
  })
}
