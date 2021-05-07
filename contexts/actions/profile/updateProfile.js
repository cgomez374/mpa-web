import axiosInstance from "../../../helpers/axiosInstance";
import {
    UPDATE_PROFILE_LOADING,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_ERROR
} from "../../actions/actionTypes";
import {successToast, errorToast} from '../../utils/toasts'

export const updateProfile = (id,body) => (dispatch) => {
  dispatch({
    type: UPDATE_PROFILE_LOADING,
  });

  // axios post request 
  
  axiosInstance()
    .patch(`/user/updateProfile/${id}`,body, {
      headers: {
          "Content-type": "multipart/form-data",
      },                    
  })
    .then((res) => {

    // setting updated user

      localStorage.setItem('userInfo', JSON.stringify(res.data.data))

      dispatch({
        type: UPDATE_PROFILE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      errorToast('failed to update profile')
      dispatch({
        type: UPDATE_PROFILE_ERROR,
        payload: err.response ? err.response.data : "COULD NOT CONNECT",
      });
    });
};
