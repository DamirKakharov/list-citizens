import React from 'react';
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
                    placeholder='search'
                    onChange={this.handleSearch}>
                </input>

            </div>
        );
    }
}

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
