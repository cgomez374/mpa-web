import axiosInstance from "../../../helpers/axiosInstance";
import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "../../actions/actionTypes";
import {successToast, errorToast} from '../../utils/toasts'



export const login = (body) => (dispatch) => {
    
  dispatch({
    type: LOGIN_LOADING,
  });

  axiosInstance()
    .post("/user/login", body)
    .then((res) => {
        
      const { token } = res.data.data

      //using localstorage approach
      localStorage.setItem('jwtToken', token)

    //   setAuthorizationToken(token)
      localStorage.setItem('userInfo', JSON.stringify(res.data.data))
        if(res.data.status == 'success'){
            successToast(res.data.message)
        }
        else{
            errorToast(res.data.message.msg)
        }


      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      

            
    })
    .catch((err) => {

        errorToast('Invalid credentials')
      dispatch({
        type: LOGIN_ERROR,
        payload: err.response ? err.response.data : "COULD NOT CONNECT",
      });
    });
};
