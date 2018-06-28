import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterText } from '../../actions/filter';

class Filter extends React.Component {
    handleSearch = (e) => {
        this.props.filterText(e.target.value);
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="search"
                    onChange={this.handleSearch}
                />
            </div>
        );
    }
}
Filter.propTypes = {
    filterText: PropTypes.func.isRequired,
};

export default connect(
    state => ({
        filter: state.filter,
    }),
    dispatch => ({
        filterText: (text) => {
            dispatch(filterText(text));
        },
    }),
)(Filter);
