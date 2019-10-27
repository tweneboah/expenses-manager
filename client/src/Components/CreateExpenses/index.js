import React, { Component } from 'react';
import ExpenseForm from '../Forms/CreateExpensesForm';
import { addExpense, fetchExpenses } from '../../redux/actions/expensesActions';
import store from '../../redux/store'
class CreateExpenses extends Component {


    render() {
        return (
            <div>
                <h1>Create Expenses</h1>
                <ExpenseForm emma={expense => {
                    store.dispatch(addExpense(expense))


                }} />
            </div>
        );
    }
}

export default CreateExpenses;