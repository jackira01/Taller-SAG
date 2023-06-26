import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { setAdminStatus } from '../slices.js/AdminSlice';
import { setError } from '../slices.js/errorSlice';

const { REACT_APP_API_URL } = process.env;

export const loginVerify = (data) => {
  return async function(dispatch) {
    try {
      const response = await axios.post(`${REACT_APP_API_URL}/users`, data);
      dispatch(setAdminStatus(response.data));
      if (response.data) {
        // Lógica adicional en caso de que sea un administrador
        // Redirigir al usuario a una ruta específica en caso de éxito
        return <Navigate to='/ruta-de-redireccion' />;
      } else {
        // En caso de no ser un administrador, no realizar ninguna redirección
        return false;
      }
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};
