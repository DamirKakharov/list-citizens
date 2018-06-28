import React from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = (state, props) => {
    return {
        user: state.users.find(user => user.id === props.match.params.id),
    };
};

export default connect(mapStateToProps)(EditUser);
