import React, { Component } from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";



class ExpensesForm extends Component {
  state = {
    description: "",
    amount: "",
    notes: "",
    createdAt: moment(),
    calendarFocused: false,
    error: ""
  };

  //changeinput
  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //form submit

  onFormSubmit = e => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      //set error
      this.setState({
        error: "Please provide amount"
      });
      console.log("ERROR");
    } else {

      this.props.onSubmit({
        description: this.state.description,
        amount : parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),//this is from moment for us to grt the value as a number
        notes: this.state.notes
      })
      //clear error
      this.setState({
        error: ""
      });
    }
  };

  //OndateChange

  //This takes moment date as argument and in our case it's createdAt

  //The datePicker allows you to choose the current and future date only

  onDateChange = createdAt => {
    this.setState({
      createdAt: createdAt
    });
  };

  onFocusChange = ({ focused }) => {
    this.setState({
      calendarFocused: focused
    });
  };

  render() {
    //Destructure state
    const { description, amount, notes } = this.state;
    return (
      <div style={{ color: "red" }}>
        <h3>ExpensesForm</h3>
        {this.state.error && <p>{this.state.error}</p>}
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={description}
            name="description"
            onChange={this.onChangeInput}
          />

          <input
            type="number"
            placeholder="amount"
            value={amount}
            name="amount"
            onChange={this.onChangeInput}
          />

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1} //select only one thus only one calendar
            isOutsideRange={() => false} //This allows us to view all past date and current or future
          />

          <textarea
            placeholder="Add notes (optional)"
            value={notes}
            name="notes"
            onChange={this.onChangeInput}
          ></textarea>

          <button type="submit" onClick={this.onFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ExpensesForm;
