import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { getUrineStripReducer } from './redux/reducers/urineStripReducers'

const reducer = combineReducers({
  getUrineStrip: getUrineStripReducer,
})
const middleware = [thunk]

const initialState = {}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
