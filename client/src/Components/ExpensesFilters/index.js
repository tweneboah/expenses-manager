import React, { Component } from 'react';
import store from '../../redux/store';
import { setTextFilter } from '../../redux/actions/expensesFilterAction';
import { connect } from 'react-redux';

class ExpensesFilters extends Component {



    onInputChange = (e) => {

        store.dispatch(setTextFilter(e.target.value))
    }
    render() {
        return (
            <div>
                <h2>Filter by text</h2>
                <form>
                    <input placeholder='Search By Text'
                        value={this.props.filters.text}
                        onChange={this.onInputChange}
                    />
                </form>
            </div>
        );
    }
};

const mapStateTopProps = (state) => {
    return {
        filters: state.filters.text
    }
}

export default connect(mapStateTopProps)(ExpensesFilters);