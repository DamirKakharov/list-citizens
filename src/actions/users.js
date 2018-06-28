import uuid from 'uuid';

export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const EDIT_USER = 'EDIT_USER';

export const addUser = ({
    surname = '',
    name = '',
    patronymic = '',
    birthday = 0,
    sex = '',
    location = '',
} = {}) => ({
    type: ADD_USER,
    payload: {
        id: uuid(),
        surname,
        name,
        patronymic,
        birthday,
        sex,
        location,
    },
});

export const removeUser = (id = {}) => ({
    type: REMOVE_USER,
    id,
});

export const editUser = (id, updates) => ({
    type: EDIT_USER,
    id,
    updates,
});

