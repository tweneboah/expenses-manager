import React, { Component } from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../../redux/actions/filters-actions";
import store from "../../redux/store";

class ExpenseListFilters extends Component {
  //This state is used customised react-date
  state = {
    calendarFocused: null
  };

  //OnIput Change
  onInputChane = e => {
    e.preventDefault();
    store.dispatch(setTextFilter(e.target.value));
  };

  //onSelectChange method
  //========================
  onSelectChange = e => {
    //console.log(e.target.value)

    if (e.target.value === "date") {
      store.dispatch(sortByDate());
    } else {
      store.dispatch(sortByAmount());
    }
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

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onInputChane}
        />

        <select
          value={this.props.filters.sortBy}
          onChange={this.onSelectChange}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

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
    );
  }
}

//When we connect our react to redux we have access to this.props.dispatch to dispatch actions to the store
const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
