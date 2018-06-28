import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { DocForm } from '../';
import { addDoc } from '../../actions/docs';

const AddDoc = props => (
    <div>
        <h3 className="title">Set Doc information:</h3>
        <DocForm
            userId={props.match.params.id}
            buttonName="Add Doc"
            onSubmitDoc={(doc) => {
                props.dispatch(addDoc(doc));
                props.history.push('/');
            }}
        />
    </div >
);

AddDoc.propTypes = {
    match: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.string.isRequired,
};

export default connect()(AddDoc);
