import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { postUrineReducer } from './redux/reducers/urineReducers'

const reducer = combineReducers({
    addUrine: postUrineReducer
})
const middleware = [thunk]

const initialState = {
  
}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
