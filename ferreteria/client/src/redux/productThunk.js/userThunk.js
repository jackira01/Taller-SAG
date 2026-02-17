import axios from 'axios';
import { setAdminStatus } from '../slices.js/AdminSlice';
import { setError } from '../slices.js/errorSlice';

const { REACT_APP_API_URL } = process.env;

export const loginVerify = (data) => {
  return async function(dispatch) {
    try {
      const response = await axios.post(`${REACT_APP_API_URL}/users/login`, data);
      if (response.data.success) {
        dispatch(setAdminStatus({
          isLoggedIn: true,
          user: response.data.user,
          rol: response.data.rol,
        }));
        return true;
      } else {
        dispatch(setError(response.data.message));
        return false;
      }
    } catch (error) {
      dispatch(setError(error.response?.data?.message || error.message));
      return false;
    }
  };
};

export const registerUser = (data) => {
  return async function(dispatch) {
    try {
      const response = await axios.post(`${REACT_APP_API_URL}/users/register`, data);
      if (response.data.success) {
        dispatch(setError(''));
        return {
          success: true,
          message: response.data.message,
        };
      } else {
        dispatch(setError(response.data.message));
        return {
          success: false,
          message: response.data.message,
        };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      dispatch(setError(errorMessage));
      return {
        success: false,
        message: errorMessage,
      };
    }
  };
};

