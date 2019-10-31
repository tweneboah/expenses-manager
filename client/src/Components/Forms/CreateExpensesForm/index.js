import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
//Date Picker Config
import moment from 'moment';
import 'react-dates/initialize';
import "react-dates/lib/css/_datepicker.css";//DatePicker CSS
import { SingleDatePicker } from 'react-dates'

import { fetchExpenses } from '../../../redux/actions/expensesActions'
import store from '../../../redux/store';

const momentss = moment()
console.log(momentss)
class ExpensesForm extends Component {
    state = {
        title: '',
        description: '',
        amount: '',
        createdAt: moment(),
        callenderFocused: false
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
    onDescriptionChange = e => {
        this.setState({
            description: e.target.value
        });
    };

    onTitleChange = e => {
        this.setState({
            title: e.target.value
        });
    };


    //CONFIGURING REACT DATE PICKER
    // IT requires the following
    //1. Function to change the default date in state so this function will re[lace whatever the user will select in the calendar and it will replace the createdAt date therefore it accept the default state as n argument


    ondateChange = (createdAt) => {
        this.setState({
            createdAt: createdAt
        })
    }

    //2.Destructing the object and grab only focused and set them to state and this done
    //automatically by react date api and this is how the documentation stated. This is where react library changes the value

    onFocusChange = ({ focused }) => {
        this.setState({
            calendarFocused: focused
        });
    };


    //form submit
    onFormSubmit = e => {
        e.preventDefault();
        this.props.onFormSubmit({
            description: this.state.description,
            amount: this.state.amount,
            title: this.state.title,
            createdAt: this.state.createdAt.valueOf()//This will convert it to a number so that we can compare the dates
        });
        //We have to update the newly created data because at the time this data is created we have already made our request
        store.dispatch(fetchExpenses());
        this.props.history.push('/dashboard')
        // alert('Expenses was added Successfully')

        console.log(this.state)
    };


    render() {

        return (
            <div className='container'>
                <div className='row justify-content-md-center m-5'>
                    <div className='col-md-6 '>
                        <h3 className='text-align-center'>Add Expenses</h3>
                        <div className='card'>
                            <div className='card-body'>
                                <form>
                                    <div class="form-group ">

                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Expense Title"
                                            autoFocus
                                            onChange={this.onTitleChange}
                                            value={this.state.title}
                                        />

                                    </div>
                                    <div class="form-group">

                                        <input
                                            type="number"
                                            class="form-control"
                                            placeholder="amount"
                                            onChange={this.onAmountChange}
                                            value={this.state.amount}
                                        />
                                    </div>

                                    <div className='form-group'>
                                        <SingleDatePicker

                                            date={this.state.createdAt} //The current date when the app runs, we will use moment = The date to start
                                            onDateChange={this.ondateChange}
                                            focused={this.state.calendarFocused}
                                            onFocusChange={this.onFocusChange}
                                            numberOfMonths={1} //select only one thus only one calendar
                                            isOutsideRange={() => false} //This allows us to view all past date and current or future
                                        />
                                    </div>


                                    <textarea
                                        placeholder="Description"
                                        required
                                        class="form-control"
                                        value={this.state.description}
                                        onChange={this.onDescriptionChange}
                                    ></textarea>


                                    {/* Redirect after clicking */}
                                    <button type="submit"
                                        class="btn btn-primary m-3"
                                        onClick={this.onFormSubmit}
                                    >Add Expenses</button>

                                </form>

                            </div>
                        </div>
                    </div>


                </div>

            </div>
        );
    }
}
//We are using with router because the react-router-dom is not rendering this component directly so we cannot have access to histtory, push, match and others so to make this accessible we use withRouter
export default withRouter(ExpensesForm);