import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeDoc } from '../../actions/docs';
import { Doc } from '../';
import getVisibleDocs from '../../selectors/docs';

export class DocList extends React.Component {
    static propTypes = {
        docs: PropTypes.object.isRequired,
        userId: PropTypes.object.isRequired,
        removeDoc: PropTypes.func.isRequired,
    }

    state = {
        docs: {},
        userId: {},
    }

    componentWillMount() {
        const { docs, userId } = this.props;

        this.setState(() => ({ docs, userId }));
    }

    componentWillReceiveProps(nextProps) {
        const { docs, userId } = nextProps;

        if (docs !== this.props.docs) {
            this.setState(() => ({ docs, userId }));
        }
    }

    handleRemoveDoc = (id, userId) => () => {
        this.props.removeDoc(id, userId);
    }

    render() {
        const { docs, userId } = this.state;

        let gg = docs[userId];

        if (gg === undefined) {
            gg = [];
        }

        return (
            <React.Fragment className="table">
                {gg.map(doc => (
                    <Doc
                        key={doc}
                        removeDoc={this.handleRemoveDoc(doc.id, doc.userId)}
                        {...doc}
                    />
                ))}
            </React.Fragment>
        );
    }
}

export default connect(
    state => ({
        docs: getVisibleDocs(state.users, state.filters, state.docs),
    }),
    dispatch => ({
        removeDoc: (id, docId) => {
            dispatch(removeDoc(id, docId));
        },
    }),
)(DocList);
