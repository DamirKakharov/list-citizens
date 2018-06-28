import { FILTER_TEXT } from '../actions/filter';

const initialState = '';

export default (state = initialState, action) => {
    switch (action.type) {
    case FILTER_TEXT:
        return action.text;
    default:
        return state;
    }
};
