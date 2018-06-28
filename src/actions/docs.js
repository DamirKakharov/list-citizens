import uuid from 'uuid';

export const ADD_DOCUMENT = 'ADD_DOCUMENT';
export const REMOVE_DOCUMENT = 'REMOVE_DOCUMENT';
export const EDIT_DOCUMENT = 'EDIT_DOCUMENT';

export const addDoc = (document = {}) => ({
    type: ADD_DOCUMENT,
    document: {
        ...document,
        id: uuid(),
    },
});

export const removeDoc = (id, userId = {}) => ({
    type: REMOVE_DOCUMENT,
    id,
    userId,
});

export const editDoc = (id, updates) => ({
    type: EDIT_DOCUMENT,
    id,
    updates: {
        ...updates,
        id,
    },
});
