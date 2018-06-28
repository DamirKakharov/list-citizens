import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import { DocForm } from '../';
import { editDoc } from '../../actions/docs';

const EditDoc = props => (
    <div className="container__box">
        <h3 className="title">Set Doc information:</h3>
        <DocForm
            buttonName="Edit Doc"
            doc={props.doc}
            onSubmitDoc={(doc) => {
                props.dispatch(editDoc(props.doc.id, doc));
                props.history.push('/');
            }}
        />
    </div>
);

const mapStateToProps = (state, props) => {
    const ids = props.match.params.id.split('&');
    const { userId } = { userId: ids[1] };

    return {
        doc: state.docs[userId].find(doc => doc.id === ids[0]),
    };
};

EditDoc.propTypes = {
    dispatch: PropTypes.func.isRequired,
    doc: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(EditDoc);
