import axios from 'axios'
import {
  ADD_URINE_STRIP_FAIL,
  ADD_URINE_STRIP_REQUEST,
  ADD_URINE_STRIP_SUCCESS,
} from '../constants/urineStrip'

const url = 'http://127.0.0.1:8000/urine-strip'

export const postUrineStripImage = (file) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_URINE_STRIP_REQUEST })

    const { userInfo } = getState().loginInfo

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const body = new FormData()
    body.append('urine_strip', file)

    const { data } = await axios.post(`${url}/add`, body, config)
    console.log(data)

    dispatch({ type: ADD_URINE_STRIP_SUCCESS, payload: data.colors })
  } catch (e) {
    console.log(e)
    dispatch({
      type: ADD_URINE_STRIP_FAIL,
      payload: e.message && e.message.data ? e.message.data : e.message,
    })
  }
}
