import { BRING_POKEMONS, ERROR } from "../actions/action.filter";

export const initialState = {
    filter: [],
    error: []
};

export function rootReducer(state = initialState, action) {
    switch (action.type) {

        case BRING_POKEMONS:
            return {
                ...state,
                filter: action.payload,
            };

        case ERROR:
            return {
                ...state,
                error: action.payload,
            };

        default:
            return { ...state };
    }
}