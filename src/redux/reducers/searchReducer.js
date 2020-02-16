import { types } from "../actions/types";

const initialState = {
    results: [],
    totalPages: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PHOTOS:
            return Object.assign({}, state, {
                totalPages: action.totalPages,
                results: [...state.results, ...action.payload]
            })
        case types.CLEAR_PHOTOS:
            return Object.assign({}, state, {
                totalPages: action.totalPages,
                results: []
            })
        default:
            return state;
    }
}