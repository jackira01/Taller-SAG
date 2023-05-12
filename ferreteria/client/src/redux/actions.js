import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";

export const getAllProducts = () => {
  return async function(dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/products");
      return dispatch({
        type: GET_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      return error;
    }
  };
};
