import React, { Component } from 'react';
import moment from 'moment';
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import { addExpense, fetchExpenses } from '../../redux/actions/expenses-actions';
import store from '../../redux/store'
import { connect } from 'react-redux';
class CreateExpenses extends Component {


    state = {
        description: 'rtyty',
        amount: '',
        notes: '',
        createdAt: moment(),
        calendarFocused: false,

    };

    //changeinput
    onChangeInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    //OnAmountChange

    //We want to allow users to type in only numbers with decimal value so we will use a regression to achieve that
    onAmountChange = e => {
        const amount = e.target.value;

        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

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
        store.dispatch(addExpense({
            createdAt: this.state.createdAt.valueOf()
        }));
        store.dispatch(fetchExpenses())//This will gives live update of listing without refreshing

    };


    componentDidMount() {
        store.dispatch(fetchExpenses())
    }

    render() {

        console.log('From props', this.props)
        return (
            <div>
                <h1>Create Expenses</h1>
                <form>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        name="description"
                        onChange={this.onChangeInput}
                    />

                    <input
                        type="number"
                        placeholder="amount"
                        value={this.amount}
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
                        value={this.notes}
                        name="notes"
                        onChange={this.onChangeInput}
                    ></textarea>

                    <button type="submit" onClick={this.onFormSubmit}>
                        Submit
          </button>
                </form>

                <h1>List of expenses</h1>
                {this.props.expensesFromCreateExpComponent.length}

                {this.props.expensesFromCreateExpComponent.map((expense) => {
                    return (
                        <div>
                            <h3>{expense.description}</h3>
                            <h5>{moment(expense.createdAt).format("MMM Do, YYYY")}</h5>
                        </div>
                    )
                })}

            </div>
        );
    }
}

const mapStateToprops = (state) => {
    return {
        expensesFromCreateExpComponent: state.expensesRootReducer.expenses
    }
}

export default connect(mapStateToprops, { fetchExpenses })(CreateExpenses);