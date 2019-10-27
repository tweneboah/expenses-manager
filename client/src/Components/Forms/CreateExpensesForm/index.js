import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { addExpense, fetchExpenses } from '../../../redux/actions/expensesActions'
import store from '../../../redux/store'
class ExpensesForm extends Component {
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
        this.props.emma(this.state);
        //We have to update the newly created data because at the time this data is created we have already made our request
        store.dispatch(fetchExpenses());
    };


    render() {
        console.log('Form exp', this.props)
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

                    {/* Redirect after clicking */}
                    <button type="submit"
                        onClick={() => this.props.history.push('/dashboard')}
                    >Submit</button>


                </form>
            </div>
        );
    }
}
//We are using with router because the react-router-dom is not rendering this component directly so we cannot have access to histtory, push, match and others so to make this accessible we use withRouter
export default withRouter(ExpensesForm);