import { ADD_USER, REMOVE_USER, EDIT_USER } from '../actions/users';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
    case ADD_USER:
        return [...state,
            action.payload];
    case REMOVE_USER:
        return state.filter(({ id }) => id !== action.id);
    case EDIT_USER:
        return state.map((user) => {
            if (user.id === action.id) {
                return {
                    ...user,
                    ...action.updates,
                };
            }
            return user;
        });
    default:
        return state;
    }
};
