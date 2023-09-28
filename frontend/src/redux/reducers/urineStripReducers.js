import {
  ADD_URINE_STRIP_FAIL,
  ADD_URINE_STRIP_REQUEST,
  ADD_URINE_STRIP_SUCCESS,
} from '../constants/urineStrip'

export const getUrineStripReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_URINE_STRIP_REQUEST:
      return { loading: true }
    case ADD_URINE_STRIP_SUCCESS:
      return { loading: false, colors: action.payload }
    case ADD_URINE_STRIP_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
