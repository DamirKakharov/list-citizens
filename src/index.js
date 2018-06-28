import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers/index';
import AppRouter from './routers/AppRouter';
import { addUser } from './actions/users';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

store.dispatch(addUser({
    surname: 'Petrov',
    name: 'Petr',
    patronymic: 'Petrovich',
    birthday: '2018-06-12',
    sex: 'female',
    location: 'Almaty',
}));

store.dispatch(addUser({
    surname: 'Ivanov',
    name: 'Ivan',
    patronymic: 'Ivanovich',
    birthday: '2018-06-12',
    sex: 'male',
    location: 'Almaty',
}));

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.getElementById('root'),
);
