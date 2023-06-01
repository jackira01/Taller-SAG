import axios from 'axios';

export const BRING_POKEMONS = 'BRING_POKEMONS';
export const ERROR = 'ERROR'

export function searchProduct(value) {
    return async function (dispatch) {
        try {
            const response = await axios(
                `http://localhost:3001/products?name=${value}`
            );
            const result = response.data;
            dispatch({
                type: BRING_POKEMONS,
                payload: result,
            });
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message,
            });
        }
    };
}