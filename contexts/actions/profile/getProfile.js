import axiosInstance from "../../../helpers/axiosInstance";
import {
    GET_PROFILE,
} from "../../actions/actionTypes";
import {successToast, errorToast} from '../../utils/toasts'
import jwt from 'jsonwebtoken'

export const getProfile = (setUserData) => (dispatch) => {

  const user = jwt.decode(localStorage.getItem('jwtToken'))
  const { id } = user


  // axios post request 
  
  axiosInstance()
    .get(`/user/${id}`)
    .then((res) => {
      dispatch({
        type: GET_PROFILE,
        payload: res.data.data,
      });
      setUserData(res.data.data)
    })
    .catch((err) => {
      errorToast('failed to get profile')
      dispatch({
        type: UPDATE_PROFILE_ERROR,
        payload: err.response ? err.response.data : "COULD NOT CONNECT",
      });
    });
};
