import React from 'react';
import { UserList, Filter } from '../';

import './home-page.scss';

const HomePage = () => (
    <div className="container__list">
        <Filter />
        <UserList />
    </div>
);

export default HomePage;
