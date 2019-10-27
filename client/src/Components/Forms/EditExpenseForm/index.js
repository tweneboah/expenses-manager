import React, { Component } from 'react';

import { addExpense } from '../../redux/actions/expensesActions'
import store from '../../redux/store'
class EditExpenseForm extends Component {
    state = {
        description: '',
        notes: '',
        amount: ''
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


    //form submit

    onFormSubmit = e => {
        e.preventDefault();

        store.dispatch(addExpense(this.state));
        this.setState({
            description: '',
            amount: '',
            notes: ''
        })

    };


    render() {
        console.log('From form com', this.props)
        return (
            <div>
                <h3>ExpensesForm</h3>

                <form onSubmit={this.onFormSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        name="description"
                        onChange={this.onChangeInput}
                    />

                    <input
                        type="number"
                        placeholder="amount"
                        name="amount"
                        onChange={this.onAmountChange}
                    />


                    <textarea
                        placeholder="Add notes (optional)"
                        name="notes"
                        onChange={this.onChangeInput}
                    ></textarea>

                    <button type="submit">
                        Submit
          </button>
                </form>
            </div>
        );
    }
}

export default (EditExpenseForm);