import React, { Component } from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import axios from "axios";
class ExpensesForm extends Component {
  //We are reconstructing our state because we want to add eit function into it. all what it means is that if there is no data found by that id we will use the default data to avoid errors

  state = {
    description: this.props.expense ? this.props.expense.description : "",
    amount: this.props.expense ? this.props.expense.amount : "",
    //For the amount, the value found is a number and the form requires a string
    notes: this.props.expense
      ? (this.props.expense.amount / 100).toString()
      : "",

    //We will create an instance of moment to get a date at that specific point in time but not the time the code runs which is moment() therefore will pass our timestamp in

    createdAt: this.props.expense ? moment(this.props.createdAt) : moment(),
    calendarFocused: false,
    error: ""
  };

  //OnAmountChange

  //We want to allow users to type in only numbers with decimal value so we will use a regression to achieve that
  onAmountChange = e => {
    const amount = e.target.value;

    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  //changeinput
  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //OndateChange

  //This takes moment date as argument and in our case it's createdAt

  //The datePicker allows you to choose the current and future date only

  //We will pass moment date to this function and this will be done by the react library automatically. So you only update the  moment date in our sate with the moment object passed and this will once again will be passed in automatically for us. This is when a user picks a new date and will set the picked date to former state.
  onDateChange = createdAt => {
    this.setState({
      createdAt: createdAt
    });
  };

  //Destructing the object and grab only focused and set them to state and this done automatically by react date api and this is how the documentation stated

  //This is where react library changes the value
  onFocusChange = ({ focused }) => {
    this.setState({
      calendarFocused: focused
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
      axios.post("http://localhost:5000/expenses", this.state).then(res => {
        console.log("axios", this.state);
      });
      // this.props.onSubmit({
      //   //Remember that this action creater receives object as argument

      //   //We have to convert the values coming from the form to proper format for example the createdAt field this contains a whole bunch of methods and properties so we will use moment.valueOf() to get the actual date in a number format

      //   description: this.state.description,
      //   amount: parseFloat(this.state.amount, 10) * 100,
      //   createdAt: this.state.createdAt.valueOf(), //this is from moment for us to get the value as a number
      //   notes: this.state.notes
      // });

      // //clear error
      // this.setState({
      //   error: ""
      // });
    }
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
            onChange={this.onAmountChange}
          />

          <SingleDatePicker
            date={this.state.createdAt} //The current date when the app runs, we will use moment = The date to start
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
