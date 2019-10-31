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
            <div className='container'>
                <div className='row ustify-content-md-center'>
                    <div className='col'>
                        <form>
                            <div class="form-group w-50" style={{ minWidth: '20%' }}>

                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Search By Text"
                                    value={this.props.filters.text}
                                    onChange={this.onInputChange} />
                            </div>
                        </form>
                    </div>

                </div>

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