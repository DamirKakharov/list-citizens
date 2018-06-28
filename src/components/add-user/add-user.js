import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { UserForm } from '../';
import { addUser } from '../../actions/users';

const AddUser = props => (
    <div>
        <h3 className="title">Set User information:</h3>
        <UserForm
            buttonName="Add User"
            onSubmitUser={(user) => {
                props.dispatch(addUser(user));
                props.history.push('/');
            }}
        />
    </div>
);

AddUser.propTypes = {
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.string.isRequired,
};

export default connect()(AddUser);
