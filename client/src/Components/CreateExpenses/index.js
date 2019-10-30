import React, { Component, Fragment } from 'react';
import ExpenseForm from '../Forms/CreateExpensesForm';
import { addExpense, fetchExpenses } from '../../redux/actions/expensesActions';
import store from '../../redux/store'
class CreateExpenses extends Component {


    render() {
        return (
            <Fragment>

                <h1>Create Expenses</h1>
                <ExpenseForm onFormSubmit={expense => {
                    store.dispatch(addExpense(expense))
                }} />

            </Fragment>
        );
    }
}

export default CreateExpenses;