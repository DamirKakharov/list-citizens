import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import { HomePage, AddUser, AddDoc, EditDoc, EditUser, NotFound } from '../components';

const AppRouter = () => (
    <BrowserRouter>
        <div className="container">
            <div className="link">
                <NavLink to="/" className="link__main" activeClassName="activeNav">Main</NavLink>
                <NavLink to="/add" className="link__add-user" activeClassName="activeNav">Add User</NavLink>
            </div>
            <Switch>
                <Route path="/" component={HomePage} exact="true" />
                <Route path="/add" component={AddUser} />
                <Route path="/user/:id" component={EditUser} />
                <Route path="/adddoc/:id" component={AddDoc} />
                <Route path="/editdoc/:id" component={EditDoc} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
