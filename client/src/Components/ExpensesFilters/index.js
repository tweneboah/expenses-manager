import React, { Component } from 'react';
import store from '../../redux/store';
import { DateRangePicker } from "react-dates";
import { setTextFilter, setStartDate, setEndDate } from '../../redux/actions/expensesFilterAction';
import { connect } from 'react-redux';

class ExpensesFilters extends Component {

    //This state is used customised react-date
    state = {
        calendarFocused: null
    };

    //OnDateChange
    //===============

    //This will call by reat date automatically  and it requires object which contains startDate and endDate from moment therefore we will destructure it

    onDateChange = ({ startDate, endDate }) => {
        //Dispatch the actions

        //When we connect our react to redux we have access to this.props.dispatch to dispatch actions to the store

        this.props.dispatch(setStartDate(startDate)); //We pass in the new start date that's passed into our onDateChange

        this.props.dispatch(setEndDate(endDate));
    };

    //OnFocusedChange
    //=============================
    //This get's the focuse
    onFocusChange = calendarFocused => {
        this.setState({
            calendarFocused: calendarFocused //Setting it into the new value
        });
    };



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

                            <div>
                                <DateRangePicker
                                    startDate={this.props.filters.startDate} //Instance of moment
                                    endDate={this.props.filters.endDate} //Instance of moment
                                    onDatesChange={this.onDateChange}
                                    focusedInput={this.state.calendarFocused}
                                    onFocusChange={this.onFocusChange} //This get's the focused value and set it
                                    numberOfMonths={1} //Only one month is visible
                                    isOutsideRange={() => false} //Able to view past date
                                    // showClearDates={true} //Button to clear date
                                    startDateId={"dwr3r34343430420423o30930"} //Any string id
                                    endDateId={"uhdushd2374i3ej3ie323233"} //Any string id
                                />
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
        filters: state.filters
    }
}

export default connect(mapStateTopProps)(ExpensesFilters);