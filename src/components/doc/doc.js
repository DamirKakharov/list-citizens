import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as FontAwesome from 'react-icons/lib/fa';

import './doc.scss';

const Doc = ({ id, number, type, fromMake, dateStart, dataEnd, userId, removeDoc }) => (
    <tr>
        <td colSpan="4" className="doc">
            <span className="doc__item" > <p className="doc__prop">Document id</p> <p className="doc__val"> {number}</p> </span>
            <span className="doc__item" > <p className="doc__prop">Ducument type</p>  <p className="doc__val" >{type}</p> </span>
            <span className="doc__item" > <p className="doc__prop">Place of issue</p>  <p className="doc__val" >{fromMake}</p> </span>
            <span className="doc__item" > <p className="doc__prop">Release date</p>  <p className="doc__val" >{dateStart}</p> </span>
            <span className="doc__item" > <p className="doc__prop">Validity</p>  <p className="doc__val" >{dataEnd}</p> </span>
            <span className="doc__item_button">
                <span
                    className="user__button"
                    onClick={(removeDoc)}
                >
                    <FontAwesome.FaMinus />
                </span>
                <Link
                    className="user__button"
                    to={`/editdoc/${id}&${userId}`}
                >
                    <FontAwesome.FaPencil />
                </Link>
            </span>
        </td >
    </tr>
);

Doc.propTypes = {
    id: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    fromMake: PropTypes.string.isRequired,
    dateStart: PropTypes.string.isRequired,
    dataEnd: PropTypes.string.isRequired,
    removeDoc: PropTypes.func.isRequired,
};


export default connect(
    state => ({
        docs: state.docs,
    }),
)(Doc);
