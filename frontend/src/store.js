import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { getUrineStripReducer } from './redux/reducers/urineStripReducers'
import { login, signup } from './redux/reducers/userReducers'

const reducer = combineReducers({
  getUrineStrip: getUrineStripReducer,
  loginInfo: login,
  signupInfo: signup,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
const userInfo = userInfoFromStorage ? JSON.parse(userInfoFromStorage) : null

const middleware = [thunk]

const initialState = { loginInfo: { userInfo } }

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
