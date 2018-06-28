import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as FontAwesome from 'react-icons/lib/fa';

import './user.scss';

const User = ({ id, surname, name, patronymic, birthday, sex, location, removeUser }) => (
    <tr className="user">
        <td className="user__item" >{surname}</td>
        <td className="user__item" >{name}</td>
        <td className="user__item" >{patronymic}</td>
        <td className="user__item" >{birthday}</td>
        <td className="user__item" >{sex}</td>
        <td className="user__item" >{location}</td>
        <td className="user__item">

            <spun className="user__button" onClick={(removeUser)}>
                <FontAwesome.FaMinus />
            </spun>
            <Link className="user__button" to={`/user/${id}`}>
                <FontAwesome.FaPencil />
            </Link>
            <Link className="user__button" to={`/adddoc/${id}`}>
                <FontAwesome.FaPlus />
            </Link>
        </td>
    </tr>
);


User.propTypes = {
    id: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    patronymic: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    removeUser: PropTypes.string.isRequired,
};

export default connect(
    state => ({
        docs: state.docs,
    }),
)(User);
