import axios from "axios";
import {
  setError,
  setProducts,
  setSearch,
  setSearchDataTable,
} from "../slices.js/productsSlice";

const { REACT_APP_API_URL } = process.env;

export const fetchProducts = () => {
  return async function(dispatch) {
    try {
      const response = await axios.get(`${REACT_APP_API_URL}/products`);
      dispatch(setProducts(response.data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};

export const editProduct = (id, data) => {
  return async function(dispatch) {
    try {
      await axios.put(`${REACT_APP_API_URL}/products/${id}`, data);

      const response = await axios.get(`${REACT_APP_API_URL}/products`);
      dispatch(setProducts(response.data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};

export const createProduct = (data) => {
  return async function(dispatch) {
    try {
      await axios.post(`${REACT_APP_API_URL}/products`, data);

      const response = await axios.get(`${REACT_APP_API_URL}/products`);
      dispatch(setProducts(response.data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};

export const deleteProduct = (id) => {
  return async function(dispatch) {
    try {
      await axios.delete(`${REACT_APP_API_URL}/products/${id}`);

      const response = await axios.get(`${REACT_APP_API_URL}/products`);
      dispatch(setProducts(response.data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};

export function searchProduct(array, string) {
  return async function(dispatch) {
    try {
      const productsList = array.filter((product) => {
        if (product.name.toLowerCase().includes(string.toLowerCase())) {
          return product;
        }
      });

      if (productsList.length) {
        dispatch(setSearch(productsList));
      } else {
        dispatch(setError("No Se Encontraron Productos"));
      }
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
}

export function searchProductDataTable(array, string) {
  return async function(dispatch) {
    try {
      const productsList = array.filter((product) => {
        if (product.name.toLowerCase().includes(string.toLowerCase())) {
          return product;
        }
      });

      if (productsList.length) {
        dispatch(setSearchDataTable(productsList));
      } else {
        dispatch(setError("No Se Encontraron Productos"));
      }
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
}
