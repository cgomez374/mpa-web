import axiosInstance from "../../../helpers/axiosInstance";
import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from "../../actions/actionTypes";
import {successToast, errorToast} from '../../utils/toasts'

export const register = (body) => (dispatch) => {
  dispatch({
    type: REGISTER_LOADING,
  });

  // axios post request 
  
  axiosInstance()
    .post("/user/signup",body)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      errorToast('user Already exist')
      dispatch({
        type: REGISTER_ERROR,
        payload: err.response ? err.response.data : "COULD NOT CONNECT",
      });
    });
};
