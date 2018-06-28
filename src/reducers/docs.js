import { ADD_DOCUMENT, REMOVE_DOCUMENT, EDIT_DOCUMENT } from '../actions/docs';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
    case ADD_DOCUMENT: {
        const { userId } = action.document;
        return {
            ...state,
            [userId]: [
                ...(state[userId] ? state[userId] : []),
                action.document,
            ],
        };
    }
    case REMOVE_DOCUMENT: {
        const { userId } = action;
        return {
            ...state,
            [userId]: [
                ...state[userId].filter(({ id }) => id !== action.id),
            ],
        };
    }
    case EDIT_DOCUMENT: {
        const { userId } = action.updates;
        return {
            ...state,
            [userId]: [
                ...state[userId].map((doc) => {
                    if (doc.id === action.id) {
                        return {
                            ...doc,
                            ...action.updates,
                        };
                    }
                    return doc;
                }),
            ],
        };
    }
    default:
        return state;
    }
};
