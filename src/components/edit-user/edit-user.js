import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { UserForm } from '../';
import { editUser } from '../../actions/users';

const EditUser = props => (
    <div className="container__box">
        <h3 className="title">Set User information:</h3>
        <UserForm
            buttonName="Edit User"
            user={props.user}
            onSubmitUser={(user) => {
                props.dispatch(editUser(props.user.id, user));
                props.history.push('/');
            }}
        />
    </div>
);

EditUser.propTypes = {
    user: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
};

export default connect(
    (state, props) => ({
        user: state.users.find(user => user.id === props.match.params.id),
    }))(EditUser);
