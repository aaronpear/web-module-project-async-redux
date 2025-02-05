import {
    GET_DATA,
    GET_DATA_SUCCESS,
    GET_DATA_FAIL
} from '../actions/actions.js';

const initialState = {
    data: [],
    error: '',
    isGetting: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DATA:
            return {
                ...state,
                isGetting: true,
                error: ''
            };
        case GET_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isGetting: false,
                error: ''
            };
        case GET_DATA_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

export default reducer;