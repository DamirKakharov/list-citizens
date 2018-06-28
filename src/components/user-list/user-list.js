import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { User, DocList } from '../';
import getVisibleUsers from '../../selectors/users';
import { removeUser } from '../../actions/users';

import './user-list.scss';

export class UsersList extends React.Component {
    static propTypes = {
        users: PropTypes.object.isRequired,
        docs: PropTypes.object.isRequired,
        removeUser: PropTypes.func.isRequired,
    }

    state = {
        users: [],
        docs: {},
    }

    componentWillMount() {
        const { users, docs } = this.props;

        this.setState(() => ({ users, docs }));
    }

    componentWillReceiveProps(nextProps) {
        const { users, docs } = nextProps;
        if (users !== this.props.users || docs !== this.props.users) {
            this.setState(() => ({ users, docs }));
        }
    }

    handleRemoveUser = id => () => {
        this.props.removeUser(id);
    }

    render() {
        const { users, docs } = this.state;

        return (
            <table className="table">
                <thead className="table__row">
                    <th className="table__title">Surname</th>
                    <th className="table__title">Name </th>
                    <th className="table__title">Patronymic</th>
                    <th className="table__title">Birthday</th>
                    <th className="table__title">Sex</th>
                    <th className="table__title">Location</th>
                </thead>
                {users.map(user => (
                    <tbody>
                        <User
                            key={user.id}
                            removeUser={this.handleRemoveUser(user.id)}
                            {...user}
                        />
                        <DocList
                            userId={user.id}
                            docs={docs}
                        />
                    </tbody>
                ))}
            </table>
        );
    }
}

export default connect(
    state => ({
        users: getVisibleUsers(state.users, state.filters, state.docs),
        docs: state.docs,
    }),
    dispatch => ({
        removeUser: (id) => {
            dispatch(removeUser(id));
        },
    }),
)(UsersList);
